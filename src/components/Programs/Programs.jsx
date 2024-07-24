import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
    return (
        <div className="programs">
            <div className="program">
                <img src={program_1} alt="Primary Education" />
                <div className="caption">
                    <img src={program_icon_1} alt="Primary Icon" />
                    <p>Primary (Grades 1-5)</p>
                    <ul>
                        <li>English</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>Art</li>
                        <li>Physical Education</li>
                    </ul>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt="Secondary Education" />
                <div className="caption">
                    <img src={program_icon_2} alt="Secondary Icon" />
                    <p>Secondary (Grades 6-10)</p>
                    <ul>
                        <li>English</li>
                        <li>Mathematics</li>
                        <li>Science (Physics, Chemistry, Biology)</li>
                        <li>Social Studies</li>
                        <li>Computer Science</li>
                        <li>Physical Education</li>
                        <li>Art</li>
                    </ul>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt="Senior Secondary Education" />
                <div className="caption">
                    <img src={program_icon_3} alt="Senior Secondary Icon" />
                    <p>Senior Secondary (Grades 11-12)</p>
                    <h4>Science Stream:</h4>
                    <ul>
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                        <li>Mathematics</li>
                        <li>Computer Science</li>
                        <li>English</li>
                    </ul>
                    <h4>Commerce Stream:</h4>
                    <ul>
                        <li>Accountancy</li>
                        <li>Business Studies</li>
                        <li>Economics</li>
                        <li>Mathematics</li>
                        <li>English</li>
                    </ul>
                </div>
            </div>
            <div className="teaching-methodologies">
                <h2>Teaching Methodologies</h2>
                <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
            </div>
            <div className="educational-resources">
                <h2>Educational Resources</h2>
                <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
            </div>
        </div>
    );
};

export default Programs;
