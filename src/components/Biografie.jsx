import robert from '../assets/images/robert_stein.jpg';
import { Row, Col } from 'react-bootstrap';

function Biographie(){
    return (
        <div>
            <Row className='d-flex p-2'>
                <Col sm={12} md={3} className='d-flex justify-content-center align-items-center'>
                    <div className="bio-img-wrapper">
                        <img className="bio-img" src={robert} alt="Porträt von Robert Stein" />
                    </div>
                </Col>
                <Col sm={12} md={9} className='d-flex flex-column justify-content-center align-items-center p-3 p-md-1'>
                    <h2>Robert Stein</h2>
                    <p className='text-center'>09.04.1876 - 23.08.1958</p>
                </Col>
            </Row>
            <Row className='p-2'>
                <Col>
                    <h4 className='py-2'>Robert Stein - Der Pädagoge</h4>
                    <p>Robert Stein war mit Leib und Seele Künstler und Pädagoge. So stellten für ihn Beruf und Berufung eine glückliche Verbindung dar, die sein Leben mit geprägt hat. Besonders deutlich wurde das an seinem lang­jährigen Wirken als Kunst-und Zeichenlehrer an der Tegeler Humboldtschule. Viele Schüler-Ausstellungen und Aktionen, die unter seiner Leitung entstanden, legen davon Zeugnis ab. Beispiel: die Ausstellung, die zum 25jährigen Bestehen der Humboldtschule unter dem Motto &#34;Tegel - Ort der Freude, Ort der Arbeit&#34; eröffnet wurde.
                    Das war 1928, und die Berliner Morgenpost gab zur Kenntnis: ...Der Weg... ,der beschritten wurde, kann wertvolle Anregungen für den modernen Zeichenunter­richt bieten... - die Schüler haben den Expressionismus auf der Berliner Kunstausstellung kennengelernt - so kam es zur Gestaltung eigener Erlebnisse. 1931 wurde ein alter Traum von Robert Stein wahr. Er hatte durchsetzen können, dass Prüfungen auf rein künst­lerischem Gebiet zum Erlangen des Reifezeugnisses (Abitur) führen konnten.Tatort war das Vestibül der Humboldtschule. Abgangs-Schüler hatten dort Mosaike und Keramiken als &#34;aus dem üblichen Rahmen fallende Arbeit&#34; gestaltet und in Form gebracht. Noch heute sind sie an Ort und Stelle zu besichtigen.</p>

                    <p>Es war ein lebensnaher und zugleich lebensfroher Unter­richt, der angeboten wurde. Ob drin im Zeichensaal, wo zum Beispiel nach Schallplattenmusik Gemaltes entstand, ob draußen im Steinbergpark oder an den Ufern des Tegeler Sees, wo die Mücken ihr Lied zum Gelingen einer gezeichneten oder gemalten Landschaft sirrten. Das alte Schulmotto, das Wilhelm von Humboldlsche, bewahrheitete sich echt und recht im Wirken Robert Steins in Tegel, seinem &#34;Ort der Freude, Ort der Arbeit&#34; : &#34;...Bilde dich selbst, und dann wirke auf andere durch das, was du bist!&#34;</p>
                    <hr />

                    <h4 className='py-2'>Robert Stein - Der Maler</h4>
                    <p>Robert Stein wurde im April 1876 in Halberstadt am Harz geboren. Von Zeitz, wo er zunächst Volksschullehrer war, zog es ihn um die Jahrhundertwende nach Berlin. Nach einem Studium an der Königlichen Kunstschule ließ er sich im Atelier von Hans Licht - einem Schüler von Eugen Bracht - zum Landschaftsmaler ausbilden. In einigen Ausstellungs-Besprechungen wurde Stein als ein &#34;Romantiker der Farbe&#34; bezeichnet. Er selbst stellte in einer seiner zahlreichen theoretischen Erörterungen über das Kunstverständnis einmal die Fragen:</p>
                    <p className='text-center'>
                        <q >...hängt Kunst wirklich so eng mit &#34;Können&#34; zusammen? Sollte Kunst doch nicht viel mehr &#34;Kündung&#34; sein?</q>
                    </p>
                    <p>Nicht nur das Reich der Farben, sondern auch das der Töne hatte es Robert Stein angetan - er war Mitglied des Philharmonischen Chores. In der Freizeit waren Klavier und Klampfe seine Lieblingsinstrumente. Robert Stein, der an der Humboldtschule über lange Jahre hinweg Mal- und Zeichenunterricht erteilte, starb im Alter von 82 Jahren im August 1958. Sein Grab befindet sich auf dem alten Städtischen Friedhof in Berlin-Tegel.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Biographie;