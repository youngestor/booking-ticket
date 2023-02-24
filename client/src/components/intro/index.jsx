import { avatar } from '../../assets/img/'

function Intro() {
    return (
        <div className="intro-wrapper">
            <header>
                <div className="avatar">
                    <img src={avatar} alt="" />
                    <div className="fullname">
                        <h2>
                            Nguyen Thanh Nghia
                        </h2>
                        <span>
                            Student
                        </span>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-item">
                        <div className="title">
                            <i className="fa-solid fa-envelope"></i>
                            Email
                        </div>
                        <div className="text">
                            youngestor@gmail.com
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="title">
                            <i className="fa-solid fa-calendar"></i>
                            Date of birth
                        </div>
                        <div className="text">
                            07/07/2002
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="title">
                            <i className="fa-solid fa-phone"></i>
                            Phone number
                        </div>
                        <div className="text">
                            0902***448
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="title">
                            <i className="fa-solid fa-location-arrow"></i>
                            Address
                        </div>
                        <div className="text">
                            Hau Giang, Viet Nam
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="main-left">
                    <div className="list-item">
                        <div className="header-item">
                            <i className="fa-solid fa-graduation-cap"></i>
                            Education
                        </div>
                        <div className="main-item">
                            <div className="name">
                                Can Tho University
                            </div>
                            <div className="time">
                                12/2020 - Now
                            </div>
                            <div className="title">
                                Major: Data communication and computer network
                            </div>
                            <div className="description">
                                Learning
                            </div>
                            <div className="description">
                                VSTEP - B1
                            </div>
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="header-item">
                            <i className="fa-solid fa-briefcase"></i>
                            Work experience
                        </div>
                        <div className="main-item">
                            <div className="name">
                                TMA Solutions
                            </div>
                            <div className="time">
                                Future
                            </div>
                            <div className="title">
                                Product Developer
                            </div>
                            <div className="description">
                                - UX/ UI Direction
                            </div>
                            <div className="description">
                                - Web development
                            </div>
                            <div className="description">
                                - Mobile app development
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-right">
                    <div className="list-item">
                        <div className="header-item">
                            <i className="fa-solid fa-pencil"></i>
                            Skills
                        </div>
                        <div className="main-item">
                            <div className="title">
                                Programming
                            </div>
                            <div className="description">
                                HTML, CSS and Javascript
                            </div>
                            <div className="title">
                                Algorithm
                            </div>
                            <div className="description">
                                Master algorithm and can apply them into project
                            </div>
                            <div className="title">
                                Teamwork
                            </div>
                            <div className="description">
                                Enjoy working as a team member as well as independently
                            </div>
                            <div className="title">
                                Problem solving
                            </div>
                            <div className="description">
                                Skilled at evaluating options and generating solutions
                            </div>
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="header-item">
                            <i className="fa-solid fa-heart"></i>
                            Interests
                        </div>
                        <div className="main-item">
                            <div className="description">
                                Watch film, listen to music, coding
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Intro;