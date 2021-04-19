import React, { Component } from 'react'

import SHOP_DATA from '../../constants/shopConstants';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

export default class Shop extends Component {

    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
                }
            </div>
        )
    }
}
