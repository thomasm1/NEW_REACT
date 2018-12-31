var secretButton = document.querySelector('#secret-button');

var secretParagraph = document.querySelector('#secret-paragraph');


var secretButtonMP = document.querySelector('#secret-buttonMP');

var secretParagraphMP = document.querySelector('#secret-paragraphMP');


/////////////////////////////////

var showSecret = false;

var showSecretMP = false;

///////////////////////////////

secretButton.addEventListener('click', toggleSecretState);

updateSecretParagraph();

secretButtonMP.addEventListener('click', toggleSecretStateMP);

updateSecretParagraphMP();


///////////////////////////////


function toggleSecretState() {

    showSecret = !showSecret;

    updateSecretParagraph();

    updateSecretButton()

}

function toggleSecretStateMP() {

    showSecretMP = !showSecretMP;

    updateSecretParagraphMP();

    updateSecretButtonMP()

}


///////////////////////////////


function updateSecretButton() {

    if (showSecret) {

        secretButton.textContent = 'Thomas M. Maestas';

    } else {

        secretButton.textContent = 'About Thomas';

    }

}

function updateSecretButtonMP() {

    if (showSecretMP) {

        secretButtonMP.textContent = 'Thomas M. Maestas';

    } else {

        secretButtonMP.textContent = 'About Thomas';

    }

}

///////////////////////////////



function updateSecretParagraph() {

    if (showSecret) {

        secretParagraph.style.display = 'block';

        secretParagraph.style.fontFamily = 'Roboto'; 

        secretParagraph.style.backgroundColor = 'steelblue';

        secretParagraph.style.color = 'aliceblue';

        secretParagraph.style.textAlign = 'left';

        secretParagraph.innerHTML = `<div class="mb-4">  Hello, I'm Tom, Thank you for your visit.<br /><br />My consulting services focus on latest technology with a Master's level data analysis methodology.   My data analysis experience has focused on education evaluation in K-12 and higher education. Now, I handle nearly all domains of data analysis. I focus on web-app design and development, specializing in data visualization with JavaScript and Python programming language.<br /><br /> 
                   
   
   <ul class="list-unstyled list-spaced left">
                                     <li> Thomas Provides Contractual Services and Consulting for Big &amp; Small Data and Web solutions since 2016 </span>

                                            <a href="http://www.thomasmaestas.net/profile/index.html"> <span> T M M</span></a>
                                         
                                                 <li>Masters Sociology and Bachelors French History <a href="http://www.unm.edu" target="_blank"> <span>University of New Mexico, Albuquerque</span></a>
                                  
                                
                                  
                                               <li> Social Media
                                                <span><a href="https://www.quora.com" target="_blank">Quora,</a><a href="https://www.historum.com" target="_blank"> Historium, </a><a href="https://www.instagram.com" target="_blank">Instagram, </a><a href="https://www.facebook.com" target="_blank">Facebook, </a><a href="https://www.meetup.com" target="_blank">Meet-Up, </a> Hiking Group, and Alliance Francaise</span>
                             
                                              
                                              <li>Lived in
<a href="https://www.parisinfo.com/" target="_blank">Paris, France</a> and
<a href="http://www.ny.gov/" target="_blank">New York</a> and <a href="https://www.visittheusa.com/state/texas" target="_blank">Texas.
</a>

                                                    </li>

                            </ul>
</div>

`;

    } else {

        secretParagraph.style.display = 'none';

    }

}


function updateSecretParagraphMP() {

    if (showSecretMP) {

        secretParagraphMP.style.display = 'block';

        secretParagraphMP.style.fontFamily = 'Roboto'; 

        secretParagraphMP.style.backgroundColor = 'transparent';

        secretParagraphMP.style.color = 'aliceblue';

        secretParagraphMP.style.textAlign = 'left';

        secretParagraphMP.innerHTML = `<div class="mb-4"><p class="title">The Central Tenets of TMM Philosophy begins, with 4 <i>a priori</i> assumptions, They are:</p>
<ul>
<li>Dialectical Materialism<br />I construct my philosophical guidance by the standards of post-Hegelian, Historical-Materialist Philosophy that sees improvement in every iteration of problem-solving. By default, this means a good philosophy's final aim, its teleology, is to accurately broaden the knowledge of, for the sake of improvement of the Human condition. <br />Post-Hegelian Logic determines a set, then compares the practical <i>thesis</i> of present empirical, perceived conditions against the ideal <i>antithesis</i> toward higher ethical, rational solutions, in order to achieve an improved synthesis, to again be repeated as a new thesis.</li>
<li>Sharing<br />    
Given that assumptions about population growth and climate change are true (I believe both are true), my thesis proposes that global population well-being is threatened much earlier than expected. Therefore, my antithesis holds that only through smart, effective <i>Sharing of Burden</i>, Sharing of Power, and <i>Sharing of Resources</i> is critical to circumnavigating the consequences of said thesis.
</li>
<li>Diversity and Equality<br />
Given that assumptions about population growth and climate change are true, my thesis proposes that American workforce productivity abides by the erroneous "work harder, not smarter."  Americans' <i>work hours</i> are over 150% more than any other nation. However, holding population scale and GDP constant, American workforce is less efficient even with more work hours. (Consider the most expensive, yet least effective of all nations: the American Healthcare system). My antithesis is better workforce integration along gender, racial, and socio-economic lines. My expected synthesized outcome is a more agile, creative, and efficient team-oriented workforce.<p class="quote">1. Quantitative Measure. <br />I argue my antithesis by comparing the gender, racial, and socio-economic heterogeneity of American, British, French, and Japanese workforce, as measured by N=1000 sampling method of companies of 50 or few employees, 51-200, and 200+ employees. My conclusion focuses on gender-specific solutions.</p>
<p class="quote">2. Qualitative Measure. <br />I qualitatively argue my antithesis beginning with female inclusion into the "2018 Boys' Club of Computer Programming and the Sciences." 16 interviews to explore the many foolish decisions made by workforce teams that have favored hiring disproportionately more male applicants in IT-related fields. This implicates future diversity of meaningful decision-making when approaching macro-level economic behavior, i.e. managers, CEOs, corporate boardmembers.</p>
</li>
</ul>   
</div>

`;

    } else {

        secretParagraphMP.style.display = 'none';

    }

}