var secretButton = document.querySelector('#secret-button'); // ME
var secretParagraph = document.querySelector('#secret-paragraph');

var secretButtonMP = document.querySelector('#secret-buttonMP'); // MY PHILOSOPHY
var secretParagraphMP = document.querySelector('#secret-paragraphMP');

var secretButtonMPB = document.querySelector('#secret-buttonMPB'); // MY PHILOSOPHY BLOG
var secretParagraphMPB = document.querySelector('#secret-paragraphMPB');
///////////////////////////////// 
var showSecret = false; 
var showSecretMP = false; 
var showSecretMPB = false;
/////////////////////////////// 
secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

secretButtonMP.addEventListener('click', toggleSecretStateMP);
updateSecretParagraphMP();

secretButtonMPB.addEventListener('click', toggleSecretStateMPB); 
updateSecretParagraphMPB(); 
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

function toggleSecretStateMPB() { 
    showSecretMPB = !showSecretMPB; 
    updateSecretParagraphMPB(); 
    updateSecretButtonMPB() 
} 
/////////////////////////////// 
function updateSecretButton() { 
    if (showSecret) { 
        secretButton.textContent = 'About Thomas'; // GOES BACK TO DEFAULT
    } else { 
        secretButton.textContent = ' Thomas M. Maestas'; // TOGGLE OPEN
    } 
}

function updateSecretButtonMP() { 
    if (showSecretMP) { 
        secretButtonMP.textContent = 'TMM Thesis'; // GOES BACK TO DEFAULT
    } else { 
        secretButtonMP.textContent = 'TMM Thesis'; 
    } 
}

function updateSecretButtonMPB() { 
    if (showSecretMPB) { 
        secretButtonMPB.textContent = 'OUR DAILY TECH: FEBRUARY'; // GOES BACK TO DEFAULT
    } else { 
        secretButtonMPB.textContent = 'OUR DAILY TECH: FEBRUARY'; 
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
        secretParagraph.innerHTML = `<div class="mb-4">  Hello, I'm Thomas, Thank you for your visit.<br /><br />My consulting services focus on latest technology with a Master's level data analysis methodology.   My data analysis experience has focused on education evaluation in K-12 and higher education. Now, I handle nearly all domains of data analysis. I focus on web-app design and development, specializing in data visualization with JavaScript and Python programming language.<br /><br /> 
                   
   
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

////////

function updateSecretParagraphMP() {

    if (showSecretMP) {

        secretParagraphMP.style.display = 'block';

        secretParagraphMP.style.fontFamily = 'Roboto';
        secretParagraphMP.style.backgroundColor = 'steelblue';
        secretParagraphMP.style.color = 'white';
        secretParagraphMP.style.overflowY = 'scroll';
        secretParagraphMP.innerHTML = ` 
<h5 class="dailytech">Central Tenets of TMM Philosophy  
</h5> 

<p class="dailytitle" >by Thomas Maestas, MA</p> 
 
 <p class="firstparagraph">Dialectical Materialism<br />I construct my philosophical guidance from a post-Hegelian, Historical-Materialist Philosophy that sees improvement by each iteration of problem-solving. My personal philosophy holds that right actions and true knowledge begin with a final, teleological goal in sight, i.e., the <i>improvement of the Human condition</i>. <br />Post-Hegelian Logic determines a set, then compares the practical <i>thesis</i> of present empirical, perceived conditions against the ideal <i>antithesis</i> toward higher ethical, rational solutions, in order to achieve an improved synthesis, to again be repeated as a new thesis.</p>
<p class="firstparagraph">Sharing<br />    
Given that assumptions about population growth and climate change are true (I believe both are true), then global population well-being is threatened earlier than expected. Therefore, my antithesis holds that  smart, effective <i>Sharing of Burden</i>, Sharing of Power, and <i>Sharing of Resources</i> is critical to meeting the imminent challenges of the two said assumptions.  
</p>
<p class="firstparagraph">Diversity and Equality<br />
American workforce culture too often abides by the ethos of "work harder, not smarter." Americans' <i>work hours</i> are over 150% more than any other nation, yet holding population-scale, GDP, and other factors constant, American workforce is less efficient even with more work hours. (Consider our American Healthcare system, which remains the most expensive, yet least efficient (in percentile GDP  compared to other nations). 
</p>
<p>My dialectical antithesis towards a solution is better workforce integration along gender, racial, and socio-economic lines. Holding other variables constant, a more heterogeneous workforce is a more agile, creative, and efficiently team-oriented workforce--in short, a smarter workforce.
</p>
<p class="quote">1. Quantitative Measure. <br />I argue my antithesis by comparing the gender, racial, and socio-economic heterogeneity of American, British, French, and Japanese workforce, as measured by N=600 sampling method of companies of 50 or few employees, 51-200, and 200+ employees. My conclusion focuses on gender-specific solutions, especially in programming-related fields.</p>
<p class="quote">2. Qualitative Measure. <br />Using <i>Intersectionality Theory</i><sup>2</sup>, I qualitatively argue my antithesis beginning with female inclusion into programming-related fields, which now many still call a "Boys' Club" within the computer-programming sector.  16 interviews to explore the effects of continual, disproportionately male-dominated,  programming-related fields. </p> 

`;

    } else {

        secretParagraphMP.style.display = 'none';

    }

}



function updateSecretParagraphMPB() {

    if (showSecretMPB) {

        secretParagraphMPB.style.display = 'block';
        secretParagraphMPB.style.fontFamily = 'Roboto';
        secretParagraphMPB.style.backgroundColor = 'transparent';
        secretParagraphMPB.style.maxHeight = '800px';
        secretParagraphMPB.style.fontWeight = 'bold';
        secretParagraphMPB.style.opacity = '1';
        secretParagraphMPB.style.color = 'darkslategray'; 
        secretParagraphMPB.innerHTML = ` 
        <h3 id="marchtop">MARCH</h3>
        <a href="#marchend"><button>END OF MARCH</button></a>
        <div id="18-03-09">
                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Web Dev Affairs</h5>

                  <p class="author">by Thomas Maestas, MA</p>
                  <h6 class="chapternumber">
                    March 9th, 2018
                  </h6>
                  <h6 class="dailytitle chapternumber"> 'Alexa, can you laugh?'
                  </h6>

                  <p class="firstparagraph">
                    Alexa has made headlines about reports of unexplained laughter responses
                    <sup id="0309-1">1</sup>. Information like this needs a
                    <i>
                      <strong>fact-check</strong>
                    </i> &agrave; la Snopes.com.
                    <sup id="0309-2">2</sup> And, whether or not Alexa misheard, "Alexa, laugh", or not, is less important than the
                    <i>socially-intrusive consequences</i> of simple app-development errors. The first issue is simply that
                    programmer
                    <strong>logic </strong> and user-interface intuition should be as clear (and generalized) as possible. This is
                    easier said than done, for example the recent case of Hawaii's mistaken
                    <i>incoming-ballistic-missile warning system</i>.
                    <sup id="0309-3">3</sup> As it turned out, the dropdown-menu design placed the "Send Test Warning" next to "Send Warning"
                    in an unintuitive, fail-possible manner. Oops.</p>
                  <p>
                    While most focus on Alexa et al.'s actions and abilites, in the name of caution, but rather the larger issue falls on how
                    much we allow ourselves to mentally depend on tech for things. To be continued ...
                  </p>

                  <p> 1.
                    <a href="https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j">https://www.buzzfeed.com/venessawong/amazon-alexa-devices-are-laughing-creepy?utm_term=.um6P18a8a#.cgggP2j2j</a>
                  </p>
                  <p> 2.
                    <a href="https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/">https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/</a>
                  </p>
                  <p> 3.
                    <a href="https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002">https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002</a>
                  </p>

                </div>

                <div id="18-03-08">
                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Sociology Tomorrow!</h5>

                  <p class="author">by Thomas Maestas, MA</p>
                  <h6 class="chapternumber">
                    March 8, 2018
                  </h6>
                  <h6 class="dailytitle chapternumber">1.4 Million Reasons for More Women in Tech, Part II
                    <br />
                    <br /> *Continuation of Women in Tech Theme from
                    <a href="#18-02-23">Feb. 23rd Blog</a>

                  </h6>
                  <p class="quote">
                    This is the first time in human history that we have the ability to see enough about ourselves that we can hope to actually
                    build social systems that work qualitatively better than the systems we've always had.
                    <p class="quoteauth">--Author unknown
                    </p>
                    <p class="firstparagraph">My February 23rd Post on women in tech focused on the
                      <i>workforce demand</i> for more women in tech positions, however today I'm writing on the
                      <i>social
                        <strong>need</strong>
                      </i> for more female insight within the tech workforce, given that programming will increasingly shape our
                      future institutions. This means that every institution, whether private hospitals, non-profit charity
                      foundations, or government bureaus, will effectively restructure (optimize) their own organizational
                      structure in an increasingly
                      <i>data-driven</i> paradigm. From a Sociology of Organizations perspective, the changes to come are breath-taking
                      to consider.</p>
                    <p>So why women? Where could I start? Better stated, why is a quintessentially important job sector, a sector
                      in desperate need for insight, comprised primarily of men?
                      <sup id="one">1</sup> The facts are evident: ~15-20% of women comprising tech positions.
                      <sup id="two">2</sup> Numbers aside, I argue there is a quintessential societal need for more women in tech: This
                      is because computing and understanding data has changed since the data collection from Web 2.0 (mobile),
                      becoming more networked and relational. </p>
                    <p>The challenge for society in this age is historic, and women must absolutely be included in the process
                      of the age: Please consider, that in the 1650's, the invention of the microscope opened a new world
                      of data and
                      <i>information</i> about the bacteriological, microscopic surroundings--hitherto blind to all. Likewise,
                      the telescope has allowed us as a society to explore the outer universe and earth's position within
                      it. </p>
                    <p>Now, the inventions of machine-learning, computing coupled with Big Data analytics, allows us to explore
                      (and manage) a universe of knowledge--about
                      <i>ourselves</i>, human society--with unfathomably complex, unstructured relational data structures. Accessing
                      the data to computer-readable form is one thing, but meaning in data is inaccessible until the
                      <i>output</i> can be
                      <i>re-</i>programmed into meaningful, human-readable data, i.e. information. This latter stage of development
                      is the key challenge--for which success depends on representative female participation in Tech. </p>
                    <p>Adding to the challenge of finding meaningful trends is the backdrop of noise from spurious variables.
                      This is akin to finding a needle in an increasingly complex and growing haystack.
                    </p>
                    <p class="quote">What's different now and has changed is it's no longer about taking this data, putting it into a computer
                      running a calculation and getting a balance sheet answer ... </p>
                    <p class="quote">What's important now is what is the context of the data, what is it connected to, what effect is it having
                      on data around it... It's basically a network of the data, it's no longer sort of tabular columns,
                      of rows of data, it's
                      <i>interconnected patterns</i>.
                      <br />--Tim Cook</p>

                  </p>
                  <p>This quote means that as we move away from rule-based, mechanistic data analytics toward more complex,
                    relational and networked data, we need an equally complex paradigm to keep up. Excluding the female mind
                    from this challenge is not simply a clumsy, myopic mistake. Worse yet, so long as the Tech Industry remains
                    gender lop-sided, Tech will increasingly resemble another myopic beast, a cave-dweller named Cyclops.
                    <p>1.
                      <a href="https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html" target="_blank">https://www.huffingtonpost.com/2015/03/27/women-in-tech_n_6955940.html</a>
                    </p>

                    <p>

                      2.
                      <a href="https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages" target="_blank">https://fairygodboss.com/articles/women-in-tech-facts-figures-and-percentages</a>
                    </p>



                    <p>



                      3.
                      <a href="https://www.aauw.org/research/why-so-few/" target="_blank">https://www.aauw.org/research/why-so-few/</a>



                    </p>
                </div>

                <div id="18-03-07">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Web Dev Affairs</h5>



                  <p class="author">by Thomas Maestas, MA</p>
                  <h6 class="chapternumber">
                    March 7, 2018

                  </h6>
                  <h6 class="dailytitle chapternumber">
                    April 23 Implementation of the FCC Net Neutrality Laws:
                    <br />The Coming Battle of States' versus Federal Rights Part II
                  </h6>
                  <p class="firstparagraph">Washington's assertion of States' Rights yesterday may augur the first of many lawsuits over control over
                    bandwidth.
                    <i></i>
                  </p>
                </div>
                <div id="18-03-07">


                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Web Dev Affairs</h5>



                  <p class="author">by Thomas Maestas, MA</p>

                  <h6 class="chapternumber">



                    March 6, 2018
                    <br />
                  </h6>
                  <h6 class="dailytitle chapternumber">
                    April 23 Implementation of the FCC Net Neutrality Laws:
                    <br />The Coming Battle of States' versus Federal Rights
                  </h6>
                  <p class="firstparagraph">Net Neutrality Rules, potentially one of the more important set of Individual Rights for us as citizens
                    in the tech age, will soon undergo the rule changes voted by the Federal Communications Commission (FCC)
                    this past December. In a nutshell, the Internet Service Providers (ISP's), e.g. Comcast, Cox, Verizon
                    are granted the power--as a Title I "information service"--to slow down traffic, make fast- &amp; slow-lanes.
                    Of course this is bad news for internet-users because even premium users may experience "throttling"
                    if using the ISP's preferred apps. The only stipulation holds that the ISP's rules are made public. However,
                    21 states are bringing lawsuits to fight these changes, and the first assertion of State Law by Washington
                    State today: </p>
                  <p class="quote">The FCC is already embroiled in a variety of lawsuits related to its rollback of net neutrality rules,
                    including an effort from 21 state attorneys general to get a court to block the FCC's move.
                  </p>
                  <p class="quote">
                    "This is symbolic politics, because the states know it is illegal to do," Roslyn Layton, a visiting scholar at the American
                    Enterprise Institute, told NBC News. "But they can put rules on the book and make it look like they're
                    doing something." The FCC is already embroiled in a variety of lawsuits related to its rollback of net
                    neutrality rules, including an effort from 21 state attorneys general to get a court to block the FCC's
                    move.
                    <sup>1</sup>
                  </p>
                  <p>S The big question arises over
                    <i>who</i> has jurisdiction between the States' and Federal authority; yet one thing is certain, the coming
                    battle for protecting citizens' rights will take place over jurisdiction of Internet Bandwidth turf.

                  </p>
                  <p>
                    <a href="https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086"
                      target="_blank">
                      https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086</a>
                  </p>
                  </p>
                </div>
                <div id="18-03-05">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Healthy Today!</h5>



                  <p class="author">by Thomas Maestas, MA</p>

                  <h6 class="chapternumber">



                    March 5, 2018
                    <br />
                  </h6>
                  <h6 class="dailytitle chapternumber">
                    A Return to the Question of Guns, Germs, and Steel: Part II and the Germs
                  </h6>
                  <p class="firstparagraph">Germs present a timely topic for today, given the especially virulent
                    <strong>Flu Virus strain</strong>. Many, like me, have wondered why our 1940's-era
                    <sup>1</sup> technology in Flu Vaccine fabrication wouldn't invite more innovative solutions. Without feigning
                    any medical expertise, I have to still ask about the progress made with the ever-mutating--i.e., drifting--Flu
                    virus' surface protein "head," called hemaglutinin. This strategy "guesses right" very effectively, and
                    provides an effective solution for most, in most years. Yet this winter has revealed that effectiveness
                    statistics are
                    <i>not always</i> in our favor.</p>
                  <p class="quote">For many decades, researchers believed the flu vaccine offered solid protection if it was a good match
                    to the circulating strains; studies from the 1940s through the 1960s routinely showed an efficacy of
                    70% to 90%. But those studies relied on a misleading methodology.
                  </p>
                  <p class="quote">Danuta Skowronski, an epidemiologist at the BC Centre for Disease Control in Vancouver, Canada, instead
                    blames mutations in the vaccine strain itself. The most common influenza vaccine contains an "inactivated"
                    virus, which manufacturers grow in chicken eggs. As Skowronski's team first reported in 2014, the virus
                    can mutate while it is growing in the eggs, resulting in a vaccine unable to block circulating strains.
                    <sup>1</sup>
                  </p>
                  <p> Earlier, I casually mentioned "guessing", yet with great respect, the science behind estimating the flu
                    virus between the time of R &amp; D, fabrication, and the flu
                    <i>season</i>. (This antigenic drift, not to be confused with
                    <i>Antigenic Shift</i> in which the Flu Virus makes an abrupt change.) I'll let the CDC abbreviate this:</p>
                  <p class="quote">
                    One way they change is called “antigenic drift.” These are small changes in the genes of influenza viruses that happen continually
                    over time as the virus replicates. These small genetic changes usually produce viruses that are pretty
                    closely related to one another, which can be illustrated by their location close together on a phylogenetic
                    tree. Viruses that are closely related to each other usually share the same antigenic properties and
                    an immune system exposed to an similar virus will usually recognize it and respond
                    <sup>2</sup>.
                  </p>
                  <p>So, ultimately, the strategy is to estimate the form, location, of that virus--what it will look like--at
                    a particular period each year. This implicates a strategy to estimate the trajectory, stage by stage,
                    of this virus, i.e. a longitudinal time-series morphology, each year. The article makes this point more
                    precise: </p>
                  <p class="quote">
                    But these small genetic changes can accumulate over time and result in viruses that are antigenically different (further
                    away on the phylogenetic tree). When this happens, the body’s immune system may not recognize those viruses.
                    <sup>2</sup>
                  </p>
                  <p>Petri dishes aside, let's focus on the changing nature of the Flu Virus, which makes itself a
                    <i>research </i>challenge in itself because of an ever-mutating object of study. Yet, this ever-changing
                    nature also provides the very tool Statisticians need most for estimating: Big Data. The Law of Large
                    Numbers means that plain math can accurately plot, and in most cases predict with a moderate statistical
                    significance, future events, sort of.</p>
                  <p>Sort of I say because too often we predict that two separate events are more likely to occur, conditional
                    on each other, then conditional upon other factors. This being
                    <i>correlation</i>, but the Statistician's Holy Grail is the other kind: Causality. Causality hinges on
                    only thre3e things: 1) Association, 2) Time Precedence, and 3) Ruling out any
                    <i> effect</i> of spurious variables. (Hang with me, I'm still getting back to the subject of our annual
                    predictions about a few months' worth of antigenic drift.)
                  </p>
                  <p>Therefore, Big data, and new advances in the statistical sciences, and the technology that increasingly
                    defines our sciences, may soon refine and supercharge research into the first and third of the three
                    points of causality. The first of these, the associations, along the phylogenetic tree, are merely a
                    network at its base, the science of which gains computational strength each year. Rare as it is in Academia,
                    in this case Might makes Right!</p>
                  </p>
                  The third tenet of causality, after association and time direction, is ruling out the effect of other factors when separating
                  <i>cause</i> and consequence. Advances in managing big data, and statistical analysis of it, means gaining
                  a better handle on the multiple effects of
                  <sup>spurious </sup>factors, hence analysis optimized by new, network-graph data structure technology. The Law
                  of Large Numbers</i>
                  <sup>3</sup>, i.e. the sheer number of mutations and other factors, coupled with new
                  <strong>technology</strong>, will better inform the morphology of the
                  <i>path</i> of the virus, along the phylogenetic tree itself. Who knows where a cure may come from, perhaps
                  a bio-statistician out there, churning the numbers, may be the one to stumble upon a better Flu Vaccine!
                  </p>
                  http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail
                  <p>
                    1.
                    <a href="http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail" target="_blank">
                      http://www.sciencemag.org/news/2017/09/why-flu-vaccines-so-often-fail
                    </a>
                  </p>
                  <p>
                    2.
                    <a href="https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual" target="_blank">
                      https://qz.com/1143420/the-2017-2018-flu-vaccine-is-less-effective-than-usual
                    </a>
                  </p>
                  <p>
                    3.
                    <a href="https://www.cdc.gov/flu/about/viruses/change.htm" target="_blank">
                      https://www.cdc.gov/flu/about/viruses/change.htm
                    </a>
                  </p>

                  <p class="quote">
                  </p>
                </div>


                <div id="18-03-03">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Sociology Tomorrow!</h5>



                  <p class="author">by Thomas Maestas, MA</p>

                  <h6 class="chapternumber">



                    March 3-4, 2018
                    <br /> Weekend
                  </h6>
                  <h6 class="dailytitle chapternumber">
                    A Return to the Question of Guns, Germs, and Steel
                  </h6>
                  <p class="firstparagraph">
                    Back in 1997, a Pulitzer-Prize winning theory--based on Dr. Jared Diamond's
                    <i>Guns, Germs, and Steel: The Fate of Human Societies</i>
                    <sup id="steel"></sup>--provided the recipe book for the success of societies. Not without controversy, the theory posits
                    that geographic and environmental preconditions, once met, provide tech &amp; resources trading opportunities,
                    within a network of other nation-states also vying for technogical innovation. </p>
                  <p>A nation's Technology, in turn, opens the means necessary to expansive, stable, independent sovereignty
                    that lasts and thrives. Equally so, the nation's friends, especially those making the best-friends list,
                    share and receive a secondary, "residual" technological bump over the time-course of the network's future
                    trading, i.e. network transactions. So, if our best friends Canada and Mexico are less keen, then there
                    is network reverberation!</p>
                  <p>Given the advent of a real, lasting Trade-War, I would think that a network theorist wouldn't be betting
                    on one particular node within this network. I say this because a disproportionately asymmetrical flow
                    of technology and resources, while simultaneously raising prices on most staple goods, may spell trouble
                    for the Every-Day person. So far, Nation-State: 0, People: 0 ... So, who wins with a Trade War? Alas,
                    let's hope not the resurrection of the Neo-Multinational Corporations, also, coincidentally, from the
                    late 1990's. Bah humbug! </p>
                  <p>
                  </p>

                  <p>
                    1.
                    <a href="http://www.jareddiamond.org/Jared_Diamond/Guns,_Germs,_and_Steel.html" target="_blank">Guns, Germs, and Steel. "Steel: The Fates of Human Societies." Diamond J (1997).</a>
                  </p>
                </div>


                <div id="18-03-02">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Web Dev Affairs</h5>



                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    March 2, 2018</h6>







                  <h6 class="chapternumber dailytitle">Widening Circles of Mobile-App Security Risks</h6>




                  <p class="firstparagraph">Security, security, another day another platform risk, or risks from your device, or risks from transactions,
                    Today's headline buried beneath a techy jargon provides a glimpse of the rising threat of web-application-based
                    hackery: Cryptojacking.
                    <i>Coindesk</i> reports, " Opera browser introduces cryptocurrency miner protection for smartphones ...
                    "
                  </p>
                  <p class="quote">
                    Cryptocurrency miners can overload smartphones' CPUs, forcing 100 percent usage and potentially causing a phone to overheat.
                    And the damage can sometimes be permanent. According to a ZDNet article, one trojan generated so much
                    heat in a phone, its battery became swollen, permanently damaging the phone. While excessive ads were
                    one reason for the heat generation, the main cause was that the phone's CPU was hijacked to mine for
                    Monero.
                    <sup>1</sup>
                  </p>
                  <p>
                    The larger issue here is that the lines between trusted mobile-app authorities, i.e., certified by Play Store or Apple's
                    is increasingly irrelevent. This is because an increasing number of app-users are ditching device-downloaded
                    apps, preferring for browser applications--hence, a much more appetizing market for the newest generation
                    of blackhat hackers, online thieves, peeping-toms, and other ill-wishers. There are a few driving factors
                    for this issue--one of which is the onset of Decentralized Applications (DAPPs), which use the
                    <i>browser</i> to interface between the Every-Day blockchain client/merchant/programmer and the actual byte-code
                    of the blockchain (via WEB).
                    <p>More importantly, the larger issue is that we live in an age in which the exclusive, native browser language
                      since 1995, i.e. JavaScript. Security issues with browser-based apps were very low, because JavaScript
                      never left the browser, ever. Until 2009, Data, Servers were the domain of PHP, JAVA, Python, etc.
                      or some other language for the highly sensitive, dirty work of dipping into all that data sitting ontop
                      of centralized servers around the world. PHP wasn't easy, so power and responsibility usually followed
                      with all the extra effort and expertise.
                      <p>2015 augured in the Node.js server-accessing (can create, read, update, and delete date) new-born capabilities
                        of JavaScript</p>
                    </p>
                  </p>
                  </p>



                  <p>1.
                    <a href="
https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/
" target="_blank">
                      https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones/
                    </a>
                  </p>
                </div>


                <div id="18-03-01">



                  <h5 class="title dailytech longtitle">OUR DAILY TECH: </h5>
                  <h5 class="subdailytech">Musing Blockchain</h5>



                  <p class="author">by Thomas Maestas, MA</p>







                  <h6 class="chapternumber">







                    March 1, 2018</h6>







                  <h6 class="chapternumber dailytitle">
                    Blockchain Sustainability Issues and The Double-Edged Sword
                  </h6>


                  <p class="firstparagraph">
                    I couldn't help but revisit the
                    <strong>Environmental Sustainability</strong> problem I addressed in my February 28th post. This problem, experienced
                    by the top two crypto-currencies Bitcoin and Ethereum, is that the
                    <i>monetary</i> value of the currency is matched to the
                    <i>computing difficulty</i>--measured either by how much the computer is sweating, or by electricity KiloWatt
                    Hours per year.
                    <sup>1</sup> Digiconomist succinctly writes:
                  </p>

                  <p class="quote">The continuous block mining cycle incentivizes people all over the world to mine Bitcoin. As mining can
                    provide a solid stream of revenue, people are very willing to run power-hungry machines to get a piece
                    of it. Over the years this has caused the total energy consumption of the Bitcoin network to grow to
                    epic proportions, as the price of the currency reached new highs.
                    <sup>2</sup>
                  </p>


                  <p>
                    And, so the issue I'm addressing is a side-effect of the deepening incentivization for miners to invest more equipment, and
                    in turn, more electricity. The article goes on to report Bitcoin's surpassing 50 TeraWatt-Hours-per-year
                    usage has surpassed that of Portugal and Singapore, which are 49.5 TWh per year, and 49.8 TWh per year,
                    respectively. In other words, the usage by the Bitcoin miner's cost (in electricity) compared with the
                    miner's gain (in Bitcoins accrued by incentivized mining) drives up and incentives a deeper Carbon Footprint.
                    <p>

                    </p>
                    <p class="quote">Fueled by a meteoric rise in the Bitcoin price over the past few months, the power usage of the Bitcoin
                      network has been increasing at a feverish pace. Just a little over three months ago, at the start of
                      November 2017, the Bitcoin Energy Consumption Index was estimating the total electricity consumption
                      of the Bitcoin network to be half of the current amount. On the first day of November, the estimated
                      consumption was equal to 24.3 TWh per year.
                      <sup>1</sup>

                    </p>
                  </p>Carbon Footprint, measured in this way, equates as a double-edged sword: The miner's electricity costs
                  account for approximately 65% of the profit (Bitcoin units' value, measured when mined). So the
                  <i>economic </i>usage means the cheapest available fuel is part of the business model--and it would lead to
                  the cost of the cheapest source of energy: Dirty Coal. At the end of the day, if the
                  <i>currency's </i>rising value means that more computationally-intensive mining is more and more profitable,
                  then perhaps the other edge looks preferred!</p>
                  <p>

                  </p>
                  <p>1.
                    <a href="
                      https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal
" target="_blank">
                      https://digiconomist.net/bitcoin-electricity-consumption-surpasses-singapore-portugal
                    </a>
                  </p>
                  <p>2.
                    <a href="
                          https://digiconomist.net/bitcoin-energy-consumption
" target="_blank">
                      https://digiconomist.net/bitcoin-energy-consumption
                    </a>
                  </p>
                  </p>

                </div>
                <hr />
                <hr />

      <p> &copy; 2018 All Rights Reserved. &nbsp; |

      <a style="color:yellow;text-decoration:none;" href="http://www.thomasmaestas.net">thomasmaestas.net &nbsp; |</a>
      <a style="color:yellow;text-decoration:none;" href="mailto:thomas@ourdailytech.com"> thomas@ourdailytech.com &nbsp; |</a>


      <a title="Contact Information: thomasmaestas.net" href="http://www.thomasmaestas.net/profile.html#contactme"> Contact Information</a>
    </p>
                <button id="marchend">
                  <a href="#marchtop">TOP</a>
                </button>
             
`;

    } else {

        secretParagraphMPB.style.display = 'none';

    }

}