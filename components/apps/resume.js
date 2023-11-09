import React, { Component } from 'react';

export class AboutMyResume extends Component {

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <iframe className="h-full w-full" src="./files/BAGUS BUDI SATOTO - RESUME.pdf#zoom=100#view=FitH" title="Bagus Budi Satoto resume" frameBorder="0"></iframe>
            </div>
        );
    }
}

export default AboutMyResume;

export const displayAboutResume = () => {
    return <AboutMyResume />;
}
