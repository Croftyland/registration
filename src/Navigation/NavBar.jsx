import React from 'react';

class NavBar extends React.Component {

    getClassName = (index) => {
        const { stage } = this.props
        const active = stage[index].isActive ? ("is-active") : (null)
        const completed = stage[index].isFinished ? ("is-completed") : (null)
        return `stage + ${active} + ${completed}`
    }

    render() {
        const { stage } = this.props


        return (<div>
            <div className="stages mb-4">


                {/* {
                    stage.map((item) => {
                        return (
                            <div className={this.getClassName(stage[item])}>
                                <div className="stage__circle">{stage[item] + 1}</div>
                                <div className="stage__caption mt-1">{item.name}</div>
                            </div>
                        )
                    })
                } */}


                <div className={this.getClassName(0)}>
                    <div className="stage__circle">1</div>
                    <div className="stage__caption mt-1">Basic</div>
                </div>

                <div className={this.getClassName(1)}>
                    <div className="stage__circle">2</div>
                    <div className="stage__caption mt-1">Contacts</div>
                </div>

                <div className={this.getClassName(2)}>
                    <div className="stage__circle">3</div>
                    <div className="stage__caption mt-1">Avatar</div>
                </div>

                <div className={this.getClassName(3)}>
                    <div className="stage__circle">4</div>
                    <div className="stage__caption mt-1">Finish</div>
                </div>

            </div>

        </div>);
    }
}

export default NavBar;