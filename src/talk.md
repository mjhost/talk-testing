class: middle, center
layout:true

---

# Escape strategies from The **Unavoidable** Murphy's Law

.footnote[
  [made with remark](https://remarkjs.com/remarkise#1)
]

???

oggi si parlerà di come fare in modo che la legge di murphy non ci colpisca troppo duramente.
Vi illustrerò in un modo molto poco ortodosso le nozioni che servono per parlare di testing e poi entreremo più in dettaglio su quello che si deve e quello che si può fare per sopravvivere.

---

"If anything **can** go wrong, it will"

???

Non abbiamo scampo.
La legge ci dice che tutto quello che non è sottoposto a verifica potrebbe fallire, possiamo affidarci alla fortuna oppure correre ai ripari.
I test ci danno la possibilità di verificare e quindi prevenire almeno in parte il danno.

---

## Why writing tests?

???

Dovremmo scrivere i test perchè eseguire i test a mano è noioso, le applicazioni tendono ad essere complicate e la quantità di casi da verificare costringerebbe noi o nel migliore dei casi un povero diavolo a cliccare per ore. I compiti noiosi e ripetitivi sono quelli in cui noi umani abbiamo una pessima efficienza, l'automazione almeno ci risparmia la ripetitività.

Di fatto però sono 3 i motivi principali per cui vengono scritti i test:

---

Customer's directive

???

Veniamo obbligati. Per molti, scrivere i test è una forma di tortura e piuttosto preferirebbero la morte. Come ogni cosa fatta controvoglia è più facile provarne l'inutilità che il viceversa.

---

Customer's satisfaction

???

I test sono una buzzword che spesso ci permette di ottenere qualcosa di più dal cliente in termini di tempo o denaro. Anche in questo caso l'efficacia è più nella presenza che nell'effettiva esecuzione.

---

Personal satisfaction

???

Questo è l'unico vero motivo per cui dovremmo testare, non possiamo dire che il nostro lavoro sia completato se non possiamo dire che ne abbiamo verificato il corretto funzionamento e durante le varie evoluzioni e i cambi di specifiche rischiamo sempre di introdurre regressioni che in questo modo possono almeno parzialmente essere tenute sotto controllo.

---

### Tests are boring but automation saves time

???

Ho già detto che scrivere i test è noioso? Automatizzando l'esecuzione almeno possiamo evitarci di eseguirli a mano ogni volta e possiamo avere un feedback continuo. Questo feedback continuo ci porta una serie di vantaggi.

---

Early bug discovery

???

Durante l'implementazione di una funzionalità magari non pensiamo ad un caso limite improbabile. Scrivendo i test invece i casi limite sono i primi che ci vengono in mente. Inoltre la possibilità di avere un feedback quasi immediato ci aiuta a rimanere all'interno del flusso creativo che moltiplica la produttività.

---

light-hearted refactoring

???

Se abbiamo dei test che ci verificano una funzionalità, possiamo andare a rifattorizzarla senza il timore di rompere qualcosa, o meglio con la sicurezza che quando romperemo qualcosa allora ci sarà un test che fallendo ci permetterà di ripristinare il comportamento corretto.

---

solid foundation to evolve

???

Come nel caso precedente se abbiamo dei test che verificano una funzionalità possiamo evolverla senza paura che i principi iniziali per i quali è nata siano compromessi

---

documentation

???

Se abbiamo dei test che verificano un componente automaticamente abbiamo degli esempi, funzionanti, che possono permettere ai nostri colleghi di utilizzare il componente in maniera produttiva da subito.

---

confidence

???

Avere il nostro codice che passa indenne per una serie di verifiche ci dà la sicurezza che ci serve per difendere le nostre idee e le nostre implementazioni di fronte a persone che magari semplicemente non le capiscono

---

pass the buck

???

Alle volte è semplicemente necessaria una prova per scaricare le responsabilità a chi le ha ma sta cercando di dimostrare che sono nostre

---

## Test Classifications

???

Quando si parla di test ci sono fondamentalmente 3 modi diversi per descriverli

---

### The box approach

black box

white box

???

differenzia i test in base alla conoscenza necessaria per scriverli. Nei test black box non sappiamo nulla dell'implementazione praticamente sono quei test che verificano o documentano l'uso di un'api. Nei test white box viceversa abbiamo accesso al codice sorgente.
Per la cronaca vengono definiti anche dei gray box test, che vanno a distinguere la fase di scrittura e la fase di esecuzione del test ma ad un certo punto sono anche discorsi sulla lana caprina.

---

### Level

.red[_validation_]

unit

integration

functional

???

Questa per me è la classificazione più importante e differenzia i test in base ai componenti che stiamo testando. Questo è il primo punto dove la comunità inizia a divergere, io vi presento una definizione che ho elaborato nel tempo. Mi sono permesso di aggiungere la validazione che testa la nostra sintassi.
I test unitari verificano una sola unità di codice, potrebbe essere una funzione oppure un'intera classe oppure la collaborazione di un gruppo di classi comunque completamente nel nostro dominio.
I test di integrazione vanno a verificare che il nostro dominio possa integrarsi con il mondo esterno, fondamentalmente che le api ci restituiscano quello che ci aspettiamo.
I test funzionali vanno a verificare che il nostro dominio e il mondo esterno producano complessivamente il risultato atteso.
Via via che si prosegue da validazione a test funzionali la "box" diventa sempre più scura e i tempi di esecuzione si allungano.

---

### Type

penetration

load

stress

usability

e2e

...

???

Ci sono innumerevoli tipi di test che possiamo eseguire ma in realtà sono quasi tutte sfumature di test funzionali o di integrazione. Il test unitario è di per sé un tipo di test oltre che un livello.

---

## Questions break #1

---

exclude:true

## Processes

- waterfall
- agile

???

i processi associati all'esecuzione dei test sono fondamentalmente 2:

waterfall in cui i test vengono eseguiti alla fine dello sviluppo solitamente da un gruppo indipendente e agile in cui i test vengono eseguiti durante l'implementazione.

---

## Agile Development

BDD

Acceptance TDD

TDD

???

nello sviluppo agile fa una distinzione a seconda di quando vengono scritti i test. BDD & Acceptance TDD: i test descrivono una funzionalità prima che si abbia idea dell'implementazione. T Driven D: i test descrivono quello che si andrà ad implementare. Giusto qualche giorno fa Matteo ha condiviso delle slide in cui veniva definito anche un altro tipo di TDD: T During D: i test vengono scritti a valle dell'implementazione ma prima del rilascio. Utilizzate quello che preferite o anche niente di tutto ciò ma è importante in caso di bug "logici" scrivere un test che fallisca dimostrando l'esistenza del bug prima di correggere il codice per eliminarlo.

---

## Test Anatomy

Runner

Suite/Spec

Case/Scenario

Assertions

Setup

Teardown

???

Come sono fatti i test? Beh abbiamo un componente detto Runner che permette di eseguire i test. Le suite o le storie ci permettono di categorizzare i test case o scenari. I test case sono i test veri e propri, le unità di codice che ci danno le risposte che ci servono. A volte ci conviene separare alcune cose che sono propedeutiche ma non fanno parte del test vero e proprio, quindi abbiamo delle funzioni di setup e teardown, sia per la suite che per i case. L'atomo del test case contiene sempre almeno una assertion ma è importante che ogni test case sia molto focalizzato. Al limite di una sola assertion per test case, ma nessuno si lamenterà se ce ne sta più di una, basta che rispecchi il dominio del test case. Più assertion ci sono in un test case più è facile che il test fallisca meno è chiaro il motivo per cui il test è fallito.

---

### Test Fixtures

mock

fake

dummy

stubs

spy

???

Se vogliamo che i test possano agire liberamente nel loro dominio senza essere "distratti" da possibili fallimenti esterni dobbiamo in ogni caso fare affidamento sulle Fixtures. Ognuno le chiama più o meno come gli pare ma esistono fondamentalmente 2 categorie: I double e le spies.
Si parla di double quando andiamo a sostituire una dipendenza del nostro codice con un'apposita implementazione che non abbia side effect e ci permetta l'isolamento o migliori le prestazioni. Si parla di spy quando andiamo a wrappare una dipendenza per verificare come il componente sotto test l'abbia utilizzata. La distinzione tra i vari double non è chiarissima e ci sono varie interpretazioni, l'importante è fare in modo di creare dei double più semplici possibili.

---

### Coverage

function

line

branch

condition

???

Il coverage è la prima gratificazione che si ottiene con una suite di test automatici, è quella percentuale che ti spinge a cercare di ottenere ancora un altro micragnoso punticino che ormai sono quasi a 100...
Quando una funzione del componente sotto test viene invocata allora la funzione è coperta. Quando una riga del componente sotto test viene eseguita, si dice che quella riga è coperta. Nel caso di strutture di controllo tipo if e case, l'esecuzione si divide in branch e possiamo andare a coprire i vari casi possibili. Quando il branch dipende da più di un valore si parla di condition coverage.
Dobbiamo cercare di trovare il giusto bilanciamento sulla copertura perchè più ci si avvicina al 100% più è complesso aumentarla.

---

### Infinite Loop: testing tests

[Mutator](https://stryker-mutator.github.io/)

???

per chi non è mai sazio c'è il livello successivo, il test dei test. Viene eseguito per esempio attraverso un mutator. Il mutator analizza il codice che i test verificano, va a cambiare qualcosa secondo delle tabelle ad esempio sostituendo + a -
o viceversa e poi riesegue i test sul nuovo codice modificato, se non esiste almeno un test che fallisce è segno che o i test vanno migliorati oppure c'è un bug nel codice. Un mutator esegue i test più e più volte, ogni volta con una singola mutazione nel codice sorgente, quindi c'è bisogno che i test siano più che ottimizzati.

---

## RL: what to test

???

Abbiamo fin qui descritto i vari tipi di test ma seguendo queste indicazioni si rischia di passare infinitamente più tempo a scrivere test che non a implementare funzionalità, quindi abbiamo alcuni parametri che ci possono suggerire su cosa è meglio concentrarsi.
Sicuramente ci conviene testare approfonditamente i componenti chiave del nostro software, quelli che vengono utilizzati dagli altri in modo che il loro comportamento sia affidabile. Ma ancora più importante è testare i componenti più complicati perchè è maggiore il rischio di aver introdotto involontariamente dei bug.

---

### Cyclomatic Complexity

???

La complessità ciclomatica è la misura della complessità di un metodo o di una classe o di un sistema. Quando un metodo è molto complicato possiamo dividerlo in due più semplici, ma aumentando la complessità della classe. Stesso discorso per le classi, se una classe è troppo complicata possiamo dividerla in due più semplici aumentando però la complessita del sistema.
Ma come si misura la complessità di un metodo? Nel 1976 un tale di nome McCabe ha [dimostrato](http://www.literateprogramming.com/mccabe.pdf) un metodo piuttosto semplice rispetto alla definizione matematica che implica il disegno di un grafo e che personalmente mi rifiuto di approfondire. Ogni funzione per la sua sola esistenza è complessa 2, a questo va aggiunto 1 per ogni struttura di controllo e 1 per ogni caso alternativo al primo e va sottratto 1 per ogni punto di uscita. In pratica 1 + il numero di parametri booleani indipendenti utilizzati nelle strutture di controllo - 1 per ogni return oltre al finale anche se implicito.
La complessità di un singolo metodo normalmente suggerita non dovrebbe mai essere oltre i 10. In alcuni casi questo limite potrebbe essere superato ma solo dopo averne giustificato per iscritto le motivazioni. Se così facendo steste superando i 15 è il caso di iniziare a farsi delle domande molto serie sul vostro futuro.

---

## Questions break #2

---

### [C.R.A.P.](http://gmetrics.sourceforge.net/gmetrics-CrapMetric.html) score

C.R.A.P.(m) =

comp(m)^2 * (1 – cov(m)/100)^3 +

comp(m)

???

Recentemente un collega mi ha parlato del CRAP score, una metrica che oltre ad avere un titolo evocativo molto simile ai WTF/min ha anche una misurabilità oggettiva che è basata sulla complessità e la copertura.
La formula è complessità al quadrato per il complemento ad 1 della copertura al cubo più la complessità.
La sigla sta per change risk anti pattern ed ovviamente è una forzatura per ottenere l'acrostico desiderato però vuole dare un riferimento su quando un'unità di codice è troppo complessa per essere modificata. A seconda della copertura questa metrica cresce con la complessità oppure con il quadrato della complessità. Uno score di 30 è considerato altamente pericoloso.

___

exclude: true

### Code smells

---

## When should tests run?

functional

integration

unit

validation

???

La risposta è più semplice di quanto potrebbe sembrare, i test dovrebbero essere eseguiti ogni volta che se ne ha l'occasione. All'aumentare del numero di elementi coinvolti in un test però i test diventano sempre più lenti e quindi necessariamente possono essere eseguiti meno spesso. I più lunghi in assoluto sono i test funzionali che tra l'altro possono essere eseguiti solo a valle di un deploy. I test di integrazione possono essere eseguiti a monte del deploy o a richiesta in casi eccezionali. I test unitari possono essere eseguiti prima della creazione del pacchetto e i test di validazione al salvataggio dei file. Per quanto riguarda le fasi di sviluppo quindi ci saranno i test di validazione più o meno integrati nell'editor, e che tra l'altro vanno solo configurati perchè esistono strumenti (detti linter) appositi per ogni linguaggio e i test unitari che invece richiedono più attenzione. Occasionalmente su richiesta, per gratificarci e per verificare che stiamo andando nella giusta direzione, durante lo sviluppo dei test eseguiremo la suite completa con il report sulla copertura.

---

## Shaking away dependencies

test before code

refactoring to test

coding with test awareness

???

La mia esperienza personale mi ha portato ad un certo punto a fare TDD e devo dire che quest'esperienza, per quanto frustrante, mi ha dato una notevole introspezione, quindi consiglio a tutti di fare un po' di esperienza in questo modo. Se avete bisogno di spunti c'è [codingdojo](http://codingdojo.org/) che ha una lista di kata adatti ad allenarsi con il tdd. Dopo quest'esperienza mi sono ritrovato a modificare una funzione piuttosto complicata e ho deciso di approcciarla coprendola di test, un po' per capire effettivamente a cosa corrispondeva ogni possibile input, un po' per avere la sicurezza di espanderla senza rompere nulla. Per ottenere un risultato soddisfacente ho dovuto modificare in maniera subdola il codice originario in modo da poterlo testare correttamente senza modificarne l'implementazione. Dopo queste esperienze ho iniziato a scrivere il mio codice tenendo comunque in considerazione il fatto che possa essere testabile e il mio stile è migliorato notevolmente.

---

## Side effects

Introspection

Know-how

Maintainability

Documentation

SOLIDity

???

Quindi posso dire che scrivere test mi ha portato tutta una serie di vantaggi collaterali, ha sicuramente migliorato la mia comprensione del modello ad oggetti e dei design pattern che ho riconosciuto, mi ha fatto anche capire meglio quelle che erano le responsabilità dei componenti che andavo a definire. Tutto ciò ha portato sicuramente a costruire una code base molto più manutenibile, non che sia sempre perfetta, anzi, però sicuramente migliore. Quando capita poi che si unisce un nuovo membro al team, questa persona potrebbe avere un fragoroso numero di domande su cosa succede e perchè, e finchè si parla del giro generale è anche facile da spiegare, ma poi quando entri nel dettaglio e bisogna analizzare il singolo componente, non c'è niente di meglio di una suite di test unitari per descrivere lo scopo primo e l'utilizzo del componente. Bene o male i test sono nati nello stesso periodo del componente, ma hanno questa qualità descrittiva che il componente col tempo e le evoluzioni potrebbe perdere. Per tirare le somme, scrivere i test mi ha portato ad aumentare la SOLIDità del mio codice.
Probabilmente solo alcuni di voi ne hanno sentito parlare e avrebbe bisogno di tutto un approfondimento a parte ma comunque si conoscono 5 principi basilari nella programmazione object oriented, Single responsibility, Open/closed, Liskov substitution, Interface segregation e Dependency inversion. Le lettere iniziali di questi principi formano l'acronimo SOLID. Seguire questi principi porta solo giovamento.

---

## Questions break #3

---

## Frameworks & tools

???

L'ultimo argomento da affrontare prima di entrare nel mondo "javascript" sono i tipi di framework e tool che sono a disposizione di ogni bravo coder che vorrebbe scrivere dei test.

---

### xUnit

Box type

Execution time

Durability

Depend on Scope & Implementation

???

L'origine della maggior parte dei framework di test è SUnit, sviluppato per SmallTalk e che ci fornisce il Runner e i costrutti Suite, Case, Setup e Teardown di cui abbiamo parlato prima. Nasce per eseguire i test unitari, ma di fatto ci permette di eseguire qualunque tipo di test.
Questo tipo di struttura viene implementata in quasi tutti i linguaggi e di volta in volta assume nomi leggermente diversi ma comunque qualcosa-unit. I behaviour driven framework sono quasi soltanto delle variazioni sul tema che tentano di aumentare la leggibilità e la descrittività utilizzando delle suite chiamate storie e dei case chiamati scenari, spesso ci riescono soprattutto attraverso l'uso di DSL specifici.

---

### Selenium Casperjs WebdriverIO Protractor

"Dark gray" box

Functional framework

Extremely brittle

Super Long running time

???

all'altro capo della catena ci sta Selenium e i vari suoi emuli. Permettono il controllo di un browser reale o virtuale, headless o headed e tutto quel che ne consegue. I test impiegano un tempo non trascurabile per essere eseguiti, tendono ad essere fragili anche se c'è almeno un design pattern che ci aiuta a renderli più solidi e soffrono di tutte le criticità associate alla verifica di un sistema complesso in cui un singolo elemento potrebbe far fallire l'intera suite. Comunque questi test funzionali sono anche i test che più si avvicinano al comportamento dell'utente e quindi hanno una loro valenza.

---

#### Webdrivers

Phantomjs

Chrome (headless)

Firefox

???

I webdriver sono le librerie che ci permettono l'interazione con i browser dal punto di vista dell'utente, sono divertenti da usare soprattutto in modalità headed e più o meno ogni browser fornisce un proprio webdriver. Ovviamente i più efficienti sono quelli che funzionano in modalità headless che spesso permettono anche di salvare delle immagini che rappresentano i contenuti della finestra nel momento in cui un test fallisce.

---

## Frameworks

???

Finalmente arriviamo al mondo javascript dove le librerie nascono come i funghi, e siccome l'argomento è confuso iniziamo a fare un po' di ordine

---

## What is needed

Runner

Test Framework

Assertion library

Double library

???

Questi componenti possiamo trovarli tutti insieme in un'unica dipendenza oppure spacchettati in varie dipendenze. Senza dubbio il più longevo di tutti al momento è Jasmine che ha quasi 10 anni ed è ancora il framework da battere. E' solido, ha tutto quello che potremmo chiedere, ha una grossa community alle spalle ed è stato creato da pivotal, quelli di spring e cloudfoundry che di test ne sanno parecchio. Tutti gli altri in un modo o nell'altro nascono come alternative a quello che è stato lo standard de facto per più di qualche anno. E fino a poco fa, sia angular che react proponevano jasmine come libreria di test. Facebook recentemente ha concluso lo svecchiamento del loro framework di test, jest, che è partito proprio includendo jasmine come dipendenza.

---

## Jasmine or Mocha

.left[

```js
describe('component', function(){
  it('does its stuff', function(){
    //assertion
  });
});
```

]

???

Jasmine e Mocha che per altro sono le librerie più usate, condividono la stessa sintassi di base di tipo comportamentale, per farli funzionare con es6 richiedono chiaramente un aiutino da parte di babel. Varie describe possono essere annidate ma i test case o scenari sono gli it.
Già iniziano a divergere però per la disabilitazione dei test o per la focalizzazione di suite e test, jasmine usa un singolo carattere sui metodi describe e it, mentre mocha usa un metodo statico.

---

## Ava

.left[

```js
test('test description', (t)=>{
  //assertion
});
```

]

???

Ava offre un'api più di tipo unitario ma da quello che ho visto tralascia completamente un'implementazione per il concetto di suite che è associato al file di test e quindi non permette uno scaffolding a più livelli. Inoltre AVA richiede di passare un argomento all'implementazione del test, su questo parametro sono attaccate le assertion. Per quello che riguarda la disabilitazione o la focalizzazione dei test usa il medesimo approccio di mocha, da cui si deduce che è una delle cose che è risultata antipatica di jasmine.

---

## Jest

TL;DR Both

---

## Assertions & doubles

Jasmine / Jest

Chai & Sinon

AVA & Sinon

???

Per quanto riguarda assertions e test doubles jasmine e jest forniscono tutto quello che serve, mocha non fornisce nulla e quindi ci si appoggia ad altre librerie come chai e sinon, AVA fornisce quello che serve per le assertion ma i double possono essere creati tramite sinon.

---

## Assertions

.left[

```js
let foo = 'bar';
//jasmine || jest
expect(foo).toEqual('bar');

//chai
  //assert style
  assert.equal(foo, 'bar');
  assert.equal(foo, 'bar', 'foo equals `bar`');
  //expect style
  expect(foo).to.equal('bar');
  expect(foo, 'foo equals `bar`').to.equal('bar');
  //should style
  foo.should.equal('bar');

//ava
t.is(foo, 'bar');
t.is(foo, 'bar', 'foo equals `bar`');

```

]

???

ad una prima occhiata si somigliano tutti in un modo o nell'altro, chai e ava danno la possibilità di aggiungere un messaggio esplicativo al test ma le best practice richiedono che il numero di assertion per test sia limitato, jasmine e jest usano il medesimo messaggio come descrittore dell'it. Ogni matcher è implementato per fornire un messaggio d'errore specifico che confronta il valore "actual" generato durante l'esecuzione del codice al valore "expected" di riferimento. E' importante non scambiare mai i posti all'interno del matcher oppure possiamo ricevere messaggi fuorvianti.

---

## Fixturing around

Everyone has its flavour, so you need to check with your local reseller

???

Quando decidete che libreria utilizzare assicuratevi sempre di controllare quali sono le sue definizioni delle fixture che mette a disposizione. Per esempio in sinon le spy sono delle funzioni che registrano e rendono pubblico il proprio utilizzo, ad esempio delle callback oppure dei wrapper su metodi reali che continueranno a essere funzionanti, gli stub sono delle spy che restituiscono dei valori finti quando vengono chiamate, quindi senza più chiamare il metodo sottostante. I mock sono degli stub che si arrabbiano se si aspettano di essere chiamati ma questo non succede. In Jasmine invece esistono solo le spy che raccolgono tutta la programmabilità necessaria ad ottenere tutti i comportamenti. Non dev'essere sempre così complicato però, non sempre servono le spie, alle volte tutto il fixturing che serve è sovrascrivere, o aggiungere una funzione di istanza che va a overridare la funzione prototipale.

---

## Dom assertion tool

Enzyme

jsdom

jest

???

Esiste un'altra classe di componenti per il test del frontend e sono le così dette dom assertion libraries, la più quotata al momento è enzyme ma terrei sott'occhio quella proposta da jest, che ricordiamo è il framework preferito da facebook e quindi per estensione potrebbe diventare il framework preferito dalla community react. Per chi si confronta invece con le care vecchie paginette html esiste sempre un plugin di jasmine che carica jquery. Indipendentemente dalle preferenze comunque l'intento di queste librerie è spostare la maggior parte dei test che precedentemente ho definito funzionali al livello unitario. Invece di utilizzare un browser per verificare il rendering, verificano l'html che vorremmo che il browser renderizzasse, la differenza è sottile ma la dipendenza "browser" sparisce e i tempi di esecuzione si abbattono.
Inoltre consentono anche lo snapshot testing, vale a dire alla prima esecuzione creano dei file con l'output html dei vari renderer che vi richiedono di committare, i test successivi saranno eseguiti confrontando i primi risultati così generati con gli ultimi risultati del codice corrente. Le assertion a questo punto possono diminuire drasticamente, invece di verificare ogni singolo pezzetto dell'html renderizzato, possiamo verificare tutto l'html in blocco con una specie di diff. Nel momento in cui abbiamo bisogno di aggiornare l'html rigenerare gli snapshot.

---

## Coverage tool

Istanbul

???

Sembra che per il coverage abbiamo a che fare con uno standard de-facto, tutti i runner integrano o comunque consigliano istanbul, la configurazione può essere più o meno complicata e apparentemnte in jest è follemente semplice, ma la storia finisce qui.

---

## Conclusions

???

Siamo così arrivati alla fine di questa introduzione al mondo dei test, spero di non avervi troppo annoiato e vorrei lasciarvi con queste indicazioni

---

Try to be always aware of the difference between unit, integration and functional

---

If you don't have time to have a full suite of tests, focus on complexity rather than coverage

---

If you don't have time to have any test suite, make sure your project at least could run it

---

## Who am I

Paolo Mariotti

Technology Master of Frontend @ Sourcesense

twitter @paolommj

github mjhost

---

## Questions?
