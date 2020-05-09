import React from 'react';
import CollectionsOverview from '../components/collection-overview/collections-overview.component'
import {Route} from 'react-router-dom'
import {setShopData} from '../redux/shop/shop.action'
import WithSpinner from '../components/with-spinner/with-spinner.component'
import {
        firestore, 
        convertCollectionsSnapshotToMap
} from '../firebase/firebase.utils'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
// import ShopPage from '../pages/category/category.component'
import CollectionPage from '../pages/collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component   {
    
    state = {
        loading: true
      };
    
    unsubscribFromFirestore = null

    componentDidMount() {
        const {setShopData} = this.props
        const collectionsRef = firestore.collection('collections')
        collectionsRef.onSnapshot(async collectionRef => {
            const collectionsMap = 
            convertCollectionsSnapshotToMap(collectionRef);
            setShopData(collectionsMap);
            this.setState({loading:false})

        }
        )       

    }


    render() {
        const {match} = this.props
        const loading = this.state.loading
        return ( 
            <div className ='shop-page'>
            
                <Route  
                exact 
                path={`${match.path}`} 
                render= {props => (
                        <CollectionsOverviewWithSpinner 
                        isLoading={loading} {...props} />         
                        )}
                />
                <Route
                path={`${match.path}/:collectionId`}
                render={props => (
                <CollectionPageWithSpinner 
                isLoading={loading} 
                {...props} />
                 )}


                />

            </div>
            )
        
    }
}


const mapDispatchToProps = dispatch => ({
    setShopData: data =>dispatch(setShopData(data))
})


export default connect(null,mapDispatchToProps)(ShopPage);