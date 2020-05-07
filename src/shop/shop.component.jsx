import React from 'react';
import CollectionsOverview from '../components/collection-overview/collections-overview.component'
import {Route} from 'react-router-dom'
// import ShopPage from '../pages/category/category.component'
import CollectionPage from '../pages/collection/collection.component';
const ShopPage = ({match})=> (
    
    <div className ='shop-page'>
        
        <Route  
        exact 
        path={`${match.path}`} 
        component={CollectionsOverview} />
        <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage} />

    </div>
)



export default ShopPage