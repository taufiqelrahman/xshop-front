import React from 'react';

import logoTransparent from './../images/logo-transparent.png';
import logoFixed from './../images/logo-fixed.png';
import logoMobile from './../images/logo-mobile.png';

export default class Header extends React.Component{
	render() {
		const { onLoginOpen } = this.props;
		return (
			<header className={"header-type-classic" /*header-absolute header-transparent*/}>
				<div className="topbar">
					<div className="container topbar-wap">
						<div className="row">
							<div className="col-sm-6">
								<div className="left-topbar">
									<div className="topbar-social">
										<a href="#" title="Facebook" target="_blank">
											<i className="fa fa-facebook facebook-bg-hover"></i>
										</a>
										<a href="#" title="Twitter" target="_blank">
											<i className="fa fa-twitter twitter-bg-hover"></i>
										</a>
										<a href="#" title="Google+" target="_blank">
											<i className="fa fa-google-plus google-plus-bg-hover"></i>
										</a>
										<a href="#" title="Pinterest" target="_blank">
											<i className="fa fa-pinterest pinterest-bg-hover"></i>
										</a>
										<a href="#" title="RSS" target="_blank">
											<i className="fa fa-rss rss-bg-hover"></i>
										</a>
										<a href="#" title="Instagram" target="_blank">
											<i className="fa fa-instagram instagram-bg-hover"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="right-topbar">
									<div className="user-wishlist">
										<a href="wishlist.html"><i className="fa fa-heart-o"></i> My Wishlist</a>
									</div>
									<div className="user-login">
										<ul className="nav top-nav">
											<li className="menu-item">
												<a data-rel="loginModal" onClick={onLoginOpen}><i className="fa fa-user"></i> Login</a>
											</li>
										</ul>
									</div>
									{/*<div className="language-switcher">
										<div className="wpml-languages disabled">
											<a className="active" href="#" data-toggle="dropdown">
												<img src="images/en.png" alt="English"/> EN
											</a>
										</div>
									</div>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="navbar-container">
					<div className="navbar navbar-default  navbar-scroll-fixed">
						<div className="navbar-default-wrap">
							<div className="container">
								<div className="row">
									<div className="col-md-12 navbar-default-col">
										<div className="navbar-wrap">
											<div className="navbar-header">
												<button type="button" className="navbar-toggle">
													<span className="sr-only">Toggle navigation</span>
													<span className="icon-bar bar-top"></span>
													<span className="icon-bar bar-middle"></span>
													<span className="icon-bar bar-bottom"></span>
												</button>
												<a className="navbar-search-button search-icon-mobile" href="#">
													<i className="fa fa-search"></i>
												</a>
												<a className="cart-icon-mobile" href="#">
													<i className="elegant_icon_bag"></i><span>0</span>
												</a>
												<a className="navbar-brand" href="./">
													<img className="logo" alt="The DMCS" src={logoTransparent} />
													<img className="logo-fixed" alt="The DMCS" src={logoFixed} />
													<img className="logo-mobile" alt="The DMCS" src={logoMobile} />
												</a>
											</div>
											<nav className="collapse navbar-collapse primary-navbar-collapse">
												<ul className="nav navbar-nav primary-nav">
													<li className="menu-item-has-children dropdown">
														<a href="./" className="dropdown-hover">
															<span className="underline">Home</span> <span className="caret"></span>
														</a>
														<ul className="dropdown-menu">
															<li><a href="home-lookbook.html">Home Lookbook</a></li>
															<li><a href="home-instagram.html">Home Instagram</a></li>
															<li><a href="home-product-slider.html">Home Product Slider</a></li>
															<li><a href="home-default.html">Home Default</a></li>
														</ul>
													</li>
													<li className="menu-item-has-children megamenu megamenu-fullwidth dropdown">
														<a href="shop.html" className="dropdown-hover">
															<span className="underline">Shop</span> <span className="caret"></span>
														</a>
														<ul className="dropdown-menu">
															<li className="menu-item-has-children mega-col-3 dropdown-submenu">
																<h3 className="megamenu-title">
																	Women <span className="caret"></span>
																</h3>
																<ul className="dropdown-menu">
																	<li><a href="shop-by-category.html">Nulla</a></li>
																	<li><a href="shop-by-category.html">Maecenas</a></li>
																	<li><a href="shop-by-category.html">Aliquam</a></li>
																	<li><a href="shop-by-category.html">Donec</a></li>
																</ul>
															</li>
															<li className="menu-item-has-children mega-col-3 dropdown-submenu">
																<h3 className="megamenu-title">
																	Brands <span className="caret"></span>
																</h3>
																<ul className="dropdown-menu">
																	<li><a href="shop-by-category.html">Adesso</a></li>
																	<li><a href="shop-by-category.html">Barbour</a></li>
																	<li><a href="shop-by-category.html">Carvela</a></li>
																	<li><a href="shop-by-category.html">Crocs</a></li>
																	<li><a href="shop-by-category.html">Evans</a></li>
																</ul>
															</li>
															<li className="menu-item-has-children mega-col-3 dropdown-submenu">
																<h3 className="megamenu-title">
																	Collections <span className="caret"></span>
																</h3>
																<ul className="dropdown-menu">
																	<li><a href="shop-by-collection.html">Spring/Summer 2014</a></li>
																	<li><a href="shop-by-collection.html">Sweet Summer</a></li>
																	<li><a href="shop-by-collection.html">Winter 2015</a></li>
																</ul>
															</li>
															<li className="menu-item-has-children mega-col-3 dropdown-submenu">
																<h3 className="megamenu-title">
																	Woo <span className="caret"></span>
																</h3>
																<ul className="dropdown-menu">
																	<li><a href="shop-masonry.html">Shop Masonry</a></li>
																	<li><a href="shop-detail.html">Shop Detail</a></li>
																	<li><a href="my-account.html">My Account</a></li>
																	<li><a href="cart.html">Cart</a></li>
																	<li><a href="cart-empty.html">Empty Cart</a></li>
																</ul>
															</li>
														</ul>
													</li>
													<li><a href="collection.html"><span className="underline">Collections</span></a></li>
													<li className="menu-item-has-children dropdown">
														<a href="#" className="dropdown-hover">
															<span className="underline">Blog</span> <span className="caret"></span>
														</a>
														<ul className="dropdown-menu">
															<li><a href="blog-default.html">Blog Default</a></li>
															<li><a href="blog-center.html">Blog Center</a></li>
															<li><a href="blog-masonry.html">Blog Masonry</a></li>
															<li><a href="blog-detail.html">Blog Detail</a></li>
														</ul>
													</li>
													<li className="menu-item-has-children dropdown">
														<a href="#" className="dropdown-hover">
															<span className="underline">Pages</span> <span className="caret"></span>
														</a>
														<ul className="dropdown-menu">
															<li><a href="about-us.html">About us</a></li>
															<li><a href="contact-us.html">Contact Us</a></li>
															<li><a href="faq.html">FAQ</a></li>
														</ul>
													</li>
													<li className="navbar-search">
														<a className="navbar-search-button" href="#">
															<i className="fa fa-search"></i>
														</a>
													</li>
													<li className="navbar-minicart navbar-minicart-nav">
														<a className="minicart-link" href="#">
															<span className="minicart-icon">
																<i className="minicart-icon-svg elegant_icon_bag"></i>
																<span>0</span>
															</span>
														</a>
														<div className="minicart">
															<div className="minicart-header no-items show">
																Your shopping bag is empty.
															</div>
															<div className="minicart-footer">
																<div className="minicart-actions clearfix">
																	<a className="button" href="#">
																		<span className="text">Go to the shop</span>
																	</a>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="header-search-overlay hide">
							<div className="container">
								<div className="header-search-overlay-wrap">
									<form className="searchform">
										<input type="search" className="searchinput" name="s" value="" placeholder="Search..."/>
										<input type="submit" className="searchsubmit hidden" name="submit" value="Search"/>
									</form>
									<button type="button" className="close">
										<span aria-hidden="true" className="fa fa-times"></span>
										<span className="sr-only">Close</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}