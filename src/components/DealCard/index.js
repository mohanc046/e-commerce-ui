import './dealCard.css'

export const DealCard = () => {
    return <div class="container desktopDealContainer">
        <div class="row align-items-center learts-mb-n30">

            <div class="col-lg-6 col-12 learts-mb-30">
                <div class="product-deal-image text-center">
                    <img src="assets/images/brand/Untitled-2.jpg" alt="" />
                </div>
            </div>

            <div class="col-lg-6 col-12 learts-mb-30">
                <div class="product-deal-content">
                    <h2 class="title">Deal of the day</h2>
                    <div class="desc">
                        <p>Years of experience brought about by our skilled craftsmen could ensure that every piece produced is a work of art. Our focus is always the best quality possible.</p>
                    </div>
                    <div class="countdown1" data-countdown="2022/01/01"><div class="count"><span class="amount">0</span><span class="period">Days</span></div><div class="count"><span class="amount">0</span><span class="period">Hours</span></div><div class="count"><span class="amount">0</span><span class="period">Minutes</span></div><div class="count"><span class="amount">0</span><span class="period">Seconds</span></div></div>
                    <a href="shop.html" class="btn btn-dark btn-hover-primary">Shop Now</a>
                </div>
            </div>

        </div>
    </div>
}