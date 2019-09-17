import React, {Component} from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }
    render(){
        const {collections} = this.state
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview 
                            key={id}
                            {...otherCollectionProps}
                        />
                    ))
                }

                {/*
                    collections.map(({id, title, items, name}) => (
                        <CollectionPreview 
                            key={id}
                            id={id}
                            title={title}
                            items={items}
                            name={name}
                        />
                    ))
                */}
            </div>
        )
    }
}

export default ShopPage

/*
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <div></div>
                    ))
                    
                }


*/