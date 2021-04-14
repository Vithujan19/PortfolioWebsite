import React from 'react';
import './Services.css';
import { Container, Row, Col } from "react-bootstrap";

function Article() {
    return (
        <Row className="arlo_tm_section" id="article">
            <div className="arlo_tm_news_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder news">
                        <h3>Latest Articles</h3>
                        <span>Check out My latest Articles</span>
                    </div>
                    <div className="arlo_tm_list_wrap blog_list">
                        <ul className="total">
                            <li className="wow fadeInUp" data-wow-duration="1.2s">
                                <div className="inner_list">
                                    <div className="image_wrap">
                                        <img className="small" src="img/blog/500x350.jpg" alt="" />
                                        <img className="big" src="img/blog/1170x450.jpg" alt="" />
                                        <div className="news_image" data-url="img/blog/thanks.jpg"></div>
                                        <a className="link_news" href="https://www.whatyouhave.ml/2020/07/thanks-to-corona.html"></a>
                                    </div>
                                    <div className="definitions_wrap">
                                        <div className="date_wrap">
                                            <p>July 01, 2020 <a href="https://www.whatyouhave.ml/2020/07/thanks-to-corona.html">Poem</a></p>
                                        </div>
                                        <div className="title_holder">
                                            <h3><a href="https://www.whatyouhave.ml/2020/07/thanks-to-corona.html">Thanks to Corona</a></h3>
                                        </div>
                                        <div className="definition">
                                            <p>If you are reading this, you probably feel the real situation and the depth of the poem. Remember the traditions what we have lost nowadays...</p>
                                        </div>

                                        <div className="read_more1">
                                            <a href="https://www.whatyouhave.ml/2020/07/thanks-to-corona.html"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.2s">
                                <div className="inner_list">
                                    <div className="image_wrap">
                                        <img className="small" src="img/blog/500x350.jpg" alt="" />
                                        <img className="big" src="img/blog/1170x450.jpg" alt="" />
                                        <div className="news_image" data-url="img/blog/kitten.jpg"></div>
                                        <a className="link_news" href="https://www.whatyouhave.ml/2020/06/the-kitten.html"></a>
                                    </div>
                                    <div className="definitions_wrap">
                                        <div className="date_wrap">
                                            <p>June 30, 2020 <a href="https://www.whatyouhave.ml/2020/06/the-kitten.html">Short Story</a></p>
                                        </div>
                                        <div className="title_holder">
                                            <h3><a href="https://www.whatyouhave.ml/2020/06/the-kitten.html">The Kitten</a></h3>
                                        </div>
                                        <div className="definition">
                                            <p>It is a Short story but the real story. If you are reading this, you probably feel the sympathy of kitten. Real deep love of Mother and a kiiten speaked in the short story....</p>
                                        </div>

                                        <div className="read_more1">
                                            <a href="https://www.whatyouhave.ml/2020/06/the-kitten.html"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay="0.4s">
                                <div className="inner_list">
                                    <div className="image_wrap">
                                        <img className="small" src="img/blog/500x350.jpg" alt="" />
                                        <img className="big" src="img/blog/1170x450.jpg" alt="" />
                                        <div className="news_image" data-url="img/blog/artic.jpg"></div>
                                        <a className="link_news" href="index.html"></a>
                                    </div>
                                    <div className="definitions_wrap">
                                        <div className="date_wrap">
                                            <p>May 13, 2020 <a href="https://www.whatyouhave.ml/2020/05/an-unanswered-question-poem.html">Poem</a></p>
                                        </div>
                                        <div className="title_holder">
                                            <h3><a href="https://www.whatyouhave.ml/2020/05/an-unanswered-question-poem.html">An Unanswered Question</a></h3>
                                        </div>
                                        <div className="definition">
                                            <p>Every living beings have life, family, love and affections. This is an Unanswered question in my life. We should obey their feelings...</p>
                                        </div>

                                        <div className="read_more1">
                                            <a href="https://www.whatyouhave.ml/2020/05/an-unanswered-question-poem.html"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Row>

    )
}

export default Article
