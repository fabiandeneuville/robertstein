import robert from '../assets/images/robert_stein.jpg';
import { Row, Col } from 'react-bootstrap';

function Biographie(){
    return (
        <div>
            <Row className='d-flex'>
                <Col sm={12} md={3} className='d-flex justify-content-center align-items-center'>
                    <div className="bio-img-wrapper">
                        <img className="bio-img" src={robert} alt="Porträt von Robert Stein" />
                    </div>
                </Col>
                <Col sm={12} md={9} className='d-flex flex-column justify-content-center align-items-center p-3 p-md-1'>
                    <h3>Robert Stein</h3>
                    <p className='text-center'>09.04.1876 - 23.08.1958</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='p-2 mb-2 bio-text'>Geboren in Halberstadt (Harz).
                    Seine schulische Laufbahn beginnt mit dem Besuch eines Seminars und später einer Mittelschule, wo er stets als Klassenbester galt. Er wurde 1890 konfirmiert. Anschließend besuchte er das Seminar in Halberstadt und erlangte 1896 seine erste Lehrerzertifizierung, gefolgt von einer zweiten im Jahr 1898. Ab 1896 unterrichtete er in den Schulen der Stadt Zeitz und engagierte sich stark in künstlerischen Aktivitäten, indem er Zeichnungen für Schulen, den Handwerksverein und einen leitenden Arzt im Krankenhaus anfertigte.
                    </p>
                    <p className='p-2 mb-2 bio-text'>Im Jahr 1899 bewirbt er sich über das Ministerium an der Kunstschule in Berlin und wurde mit der Zusage einer Stipendiumszusage von 500 RM angenommen. Ab dem Jahr 1900 begann er seine Karriere als Gemeindelehrer in Berlin, und 1904 bestand er die Prüfung als Zeichenlehrer für höhere Schulen. 1906 wurde er als Zeichenlehrer an der höheren Knabenschule, später als Humboldtschule in Tegel, angestellt.</p>
                    <p className='p-2 mb-2 bio-text'>Im Jahr 1929 wurde er zum Studienrat befördert und unterrichtete bis zu seiner ersten Pensionierung 1938 an derselben Schule. 1940 wurde er erneut an der Humboldtschule eingesetzt, bis er 1945 seine zweite Pensionierung annahm. Ab Mai 1945 arbeitete er zum dritten Mal an der Humboldtschule.</p>
                    <p className='p-2 mb-2 bio-text'>Parallel zu seiner Tätigkeit als Lehrer setzte er seine künstlerische Ausbildung bei verschiedenen Malern fort, darunter die Professoren Paul Mohn, Philip Frank, Achtenhagen, Hendorf, Tschautsch, Heinrich Otte, Fricke und Michael. Zudem unternahm er Studienreisen mit den Malern Hans Licht, Adolf Obst und Müller-Schönefelder.</p>
                    <p className='p-2 mb-2 bio-text'>Ab 1921 ist er Mitglied im Reichsverband bildender Künstler und trat dem Künstlerverein Pallas bei, den er später in Künstlerbund Südwest umbenannte und dessen erster Vorsitzender er wurde. Sein Atelier befindet sich in der Yorkstraße 74.</p>
                    <p className='p-2 mb-2 bio-text'>Im Jahr 1931 wurde er Mitglied des Vereins bildender Künstler (Juryfreien Hermann Sandkuhl) und trat der Sozialdemokratischen Partei Deutschlands (SPD) bei. 1929 wurde er von der Stadt Berlin nach Wien geschickt, um den Kunstunterricht an den Wiener Schulen zu studieren und traf dort auf Professoren wie Rainer, Czizek und Larisch.</p>
                    <p className='p-2 mb-2 bio-text'>Im Dezember 1948 erlitt er den Verlust des linken Auges, was die Fortführung seiner künstlerischen Arbeit unmöglich machte. Von 1949 bis 1954 widmete er sich der Restaurierung von Kunstwerken.</p>
                </Col>

            </Row>
        </div>
    )
}

export default Biographie;