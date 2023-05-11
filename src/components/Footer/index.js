import './footer.css';

export const Footer = () => {
    return (
        <>
            <div class="footer2-section section section-padding footerContainer" >
                <div class="container">
                    <div class="row learts-mb-n40">

                        <div class="col-lg-6 learts-mb-40">
                            <div class="widget-about">
                                <img src="assets/images/logo/logo-nsh.png" alt="" />
                            </div>
                        </div>

                        <div class="col-lg-4 learts-mb-40">
                            <div class="row">
                                <div class="col">
                                    <ul class="widget-list widgetListContainer">
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Store location</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Orders</a></li>
                                    </ul>
                                </div>
                                <div class="col">
                                    <ul class="widget-list widgetListContainer">
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Support Policy</a></li>
                                        <li><a href="#">Size Guide</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 learts-mb-40">
                            <ul class="widget-list widgetListContainer" >
                                <li> <i class="fab fa-twitter"></i> <a href="https://www.twitter.com/">Twitter</a></li>
                                <li> <i class="fab fa-facebook-f"></i> <a href="https://www.facebook.com/">Facebook</a></li>
                                <li> <i class="fab fa-instagram"></i> <a href="https://www.instagram.com/">Instagram</a></li>
                                <li> <i class="fab fa-youtube"></i> <a href="https://www.youtube.com/">Youtube</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div class="footer2-copyright section">
                <div class="container">
                    <p class="copyright text-center">&copy; 2022 New Source Hub. All Rights Reserved</p>
                </div>
            </div>

            <a id="scrollUp" href="#top" class="scrollUIContainer">
                <i class="fal fa-long-arrow-up">
                </i>
            </a>
        </>
    )
}