import { FIXED_VALUES } from '../../utils/constants'
import './productCard.css'

export const ProductCard = (props) => {
    const { className, image_url, price, product_name, type, onsale, isHotSelling = false, isOutOfStock = false } = props.product

    return (
        <>
            <div class={`grid-item col ${type}`}>
                <div class="product">
                    <div class="product-thumb ">

                        <a href="product-details.html" class="image" >
                            <span class="product-badges">
                                {isOutOfStock && <span class="outofstock"><i class="fal fa-frown"></i></span>}
                                {onsale && <span class="onsale">{onsale}%</span>}
                                {isHotSelling && <span class="hot">hot</span>}
                            </span>
                            <img src={image_url} class={'product_image'} alt="Product Image" />
                            <img class={`image-hover ${'product_image'}`} src={image_url} alt="Product Image" />
                        </a>
                        <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                    </div>
                    <div class="product-info">
                        <div class="product-buttons">
                            <span class="bxp-bldr-item_price"><span class="add-text">ADD</span>{' '} {FIXED_VALUES.CURRENCY} {price}</span>
                        </div>
                        <h6 class="title"><a href="product-details.html">{product_name}</a></h6>
                    </div>
                </div>
            </div>
        </>
    )
}