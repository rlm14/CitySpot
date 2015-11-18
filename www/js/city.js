L.mapbox.accessToken = '';
var map = L.mapbox.map('map','rmcclellan.jk05gcji');
L.control.fullscreen().addTo(map);
var markers = new L.MarkerClusterGroup();

var addressPoints = [ [38.959533206 ,-77.084970771],[38.960062981 ,-77.085241563],[38.960467456 ,-77.085693812],[38.960360753 ,-77.085639377], [38.960252795 ,-77.085584302], [38.960144167 ,-77.085528887], [38.959492148 ,-77.085196267], [38.959439083 ,-77.084922661], [38.95975785 ,-77.085085596], [38.960122049 ,-77.085271756], [38.960343513 ,-77.085384957], [38.960460645 ,-77.08544483], [38.960467456 ,-77.085693812], [38.960360753 ,-77.085639377], [38.960252795 ,-77.085584302], [38.960144167 ,-77.085528887], [38.959492148 ,-77.085196267], [38.959439083 ,-77.084922661], [38.95975785 ,-77.085085596], [38.960122049 ,-77.085271756], [38.960343513 ,-77.085384957], [38.960460645 ,-77.08544483], [38.96304403 ,-77.07399229], [38.96379498 ,-77.075050714], [38.963542485 ,-77.074903681], [38.963479979 ,-77.074617623], [38.963750231 ,-77.074775405], [38.963953462 ,-77.074073446], [38.964042145 ,-77.074584297], [38.965890742 ,-77.076272936], [38.965644816 ,-77.075877344], [38.965767845 ,-77.075149816], [38.965975169 ,-77.076528474], [38.966002953 ,-77.076087026], [38.966238836 ,-77.076224832], [38.966581921 ,-77.076425269], [38.963043971 ,-77.074123364], [38.963137789 ,-77.074871777], [38.963137759 ,-77.074954507], [38.963748483 ,-77.075023637], [38.963647452 ,-77.074964805], [38.963254891 ,-77.07448621], [38.963405878 ,-77.07457436], [38.963644655 ,-77.074713767], [38.964042108 ,-77.073983254], [38.964042118 ,-77.074140409], [38.964042127 ,-77.074289834], [38.964042137 ,-77.074448604], [38.964270024 ,-77.075078396], [38.964528891 ,-77.075229225], [38.964702348 ,-77.07557872], [38.964596756 ,-77.075517403], [38.964488538 ,-77.075454562], [38.964379746 ,-77.075391387], [38.964282441 ,-77.075334884], [38.964186612 ,-77.075279237], [38.965432647 ,-77.07600354], [38.965091394 ,-77.075555792], [38.965200421 ,-77.075619139], [38.965311827 ,-77.075683869], [38.965422497 ,-77.07574817], [38.965532344 ,-77.075811995], [38.965767501 ,-77.075748912], [38.965767587 ,-77.075598792],[38.965767673 ,-77.075448787], [38.965767759 ,-77.075298782], [38.966031569 ,-77.076658826], [38.96583963 ,-77.076907629], [38.965922701 ,-77.076675248], [38.966125977 ,-77.076158897], [38.964270024 ,-77.075078396], [38.964528891 ,-77.075229225], [38.964702348 ,-77.07557872], [38.964596756 ,-77.075517403], [38.964488538 ,-77.075454562], [38.964379746 ,-77.075391387], [38.964282441 ,-77.075334884], [38.964186612 ,-77.075279237], [38.965432647 ,-77.07600354], [38.965091394 ,-77.075555792], [38.965200421 ,-77.075619139], [38.965311827 ,-77.075683869], [38.965422497 ,-77.07574817], [38.965532344 ,-77.075811995], [38.965767501 ,-77.075748912], [38.965767587 ,-77.075598792], [38.965767673 ,-77.075448787], [38.965767759 ,-77.075298782], [38.963748483 ,-77.075023637], [38.963647452 ,-77.074964805], [38.963254891 ,-77.07448621], [38.963405878 ,-77.07457436], [38.963644655 ,-77.074713767], [38.962261924 ,-77.027810729], [38.961988528 ,-77.027832832], [38.960249976 ,-77.02819984], [38.960500474 ,-77.028180144], [38.964797642 ,-77.027605827], [38.964113553 ,-77.027891712], [38.964738539 ,-77.027840694], [38.965663367 ,-77.027759569], [38.966085281 ,-77.027850946], [38.967007027 ,-77.027408361], [38.966352918 ,-77.027698177], [38.966663801 ,-77.027669556], [38.966989241 ,-77.027639592], [38.967336453 ,-77.027069147], [38.967240403 ,-77.0267392], [38.962422402 ,-77.027797755], [38.962152511 ,-77.027819575], [38.96186545 ,-77.027842783], [38.961743541 ,-77.027852639], [38.961611742 ,-77.027863295], [38.959409556 ,-77.028265915], [38.959578234 ,-77.028252654], [38.960355444 ,-77.028191548], [38.960606662 ,-77.028171796], [38.960769765 ,-77.028158972], [38.961941958 ,-77.028064894], [38.962055702 ,-77.028056035], [38.962170166 ,-77.02804712], [38.964695148 ,-77.027614677], [38.964594995 ,-77.027623325], [38.964486555 ,-77.027632689], [38.964377396 ,-77.027642115], [38.964267876 ,-77.027651571], [38.964157095 ,-77.027661136], [38.964047034 ,-77.02767064], [38.964217838 ,-77.027883199], [38.964330483 ,-77.027874004], [38.964424069 ,-77.027866364], [38.964550558 ,-77.027856039], [38.964678665 ,-77.027845581], [38.96584952 ,-77.027513898], [38.965754841 ,-77.027521894], [38.965654127 ,-77.0275304], [38.965402448 ,-77.027782074], [38.965515876 ,-77.02777229], [38.965785512 ,-77.027749034], [38.965914039 ,-77.027737948], [38.966180625 ,-77.027268429], [38.96608536 ,-77.027984566], [38.966907457 ,-77.027417843], [38.966800769 ,-77.027428004], [38.966416728 ,-77.027464579], [38.966487784 ,-77.02768576], [38.966785908 ,-77.027658313], [38.967188709 ,-77.027621227], [38.967336485 ,-77.026922579], [38.967336516 ,-77.026788706], [38.967336544 ,-77.02665668], [38.967240474 ,-77.026862899], [38.967240561 ,-77.027011753], [38.967240636 ,-77.027142262], [38.962422402 ,-77.027797755], [38.962152511 ,-77.027819575], [38.96186545 ,-77.027842783], [38.961743541 ,-77.027852639], [38.961611742 ,-77.027863295], [38.959409556 ,-77.028265915], [38.959578234 ,-77.028252654], [38.960355444 ,-77.028191548], [38.960606662 ,-77.028171796], [38.960769765 ,-77.028158972], [38.961941958 ,-77.028064894], [38.962055702 ,-77.028056035], [38.962170166 ,-77.02804712], [38.964695148 ,-77.027614677], [38.964594995 ,-77.027623325], [38.964486555 ,-77.027632689], [38.964377396 ,-77.027642115], [38.964267876 ,-77.027651571], [38.964157095 ,-77.027661136], [38.964047034 ,-77.02767064],[38.964217838 ,-77.027883199], [38.964330483 ,-77.027874004], [38.964424069 ,-77.027866364], [38.964550558 ,-77.027856039], [38.964678665 ,-77.027845581], [38.96584952 ,-77.027513898], [38.965754841 ,-77.027521894], [38.965654127 ,-77.0275304], [38.965402448 ,-77.027782074], [38.965515876 ,-77.02777229], [38.965785512 ,-77.027749034], [38.965914039 ,-77.027737948],[38.966180625 ,-77.027268429], [38.96608536 ,-77.027984566], [38.966907457 ,-77.027417843], [38.966800769 ,-77.027428004], [38.966416728 ,-77.027464579], [38.966487784 ,-77.02768576], [38.966785908 ,-77.027658313], [38.967188709 ,-77.027621227], [38.967336485 ,-77.026922579], [38.967336516 ,-77.026788706], [38.967336544 ,-77.02665668], [38.967240474 ,-77.026862899], [38.967240561 ,-77.027011753], [38.967240636 ,-77.027142262], [38.973524114 ,-77.017363346], [38.973540894 ,-77.018479479], [38.974779851 ,-77.014295733], [38.974912427 ,-77.01706499], [38.974869325 ,-77.017186938], [38.974825889 ,-77.017308819], [38.974779284 ,-77.017441778], [38.97473513 ,-77.017576356], [38.974095151 ,-77.017926012], [38.974141768 ,-77.01813696], [38.974239956 ,-77.01813722], [38.974351839 ,-77.018137516], [38.97367729 ,-77.017674768], [38.973677494 ,-77.017526363], [38.973523805 ,-77.017504596], [38.973523488 ,-77.017649077], [38.973523171 ,-77.017793674], [38.973677454 ,-77.018440951], [38.973677333 ,-77.018306508], [38.973540887 ,-77.018418547], [38.974910705 ,-77.014521225], [38.974885136 ,-77.014229357], [38.974790838 ,-77.014421893], [38.974803243 ,-77.01456434], [38.974856415 ,-77.015174958], [38.974869219 ,-77.015321992], [38.974881971 ,-77.015468453], [38.974971039 ,-77.016491389], [38.973617592 ,-77.014467122], [38.973522661 ,-77.014534796], [38.973425841 ,-77.014603816], [38.973329257 ,-77.014672669], [38.972499154 ,-77.014181677], [38.974869325 ,-77.017186938], [38.974825889 ,-77.017308819], [38.974779284 ,-77.017441778], [38.97473513 ,-77.017576356], [38.974095151 ,-77.017926012], [38.974141768 ,-77.01813696], [38.974239956 ,-77.01813722], [38.974351839 ,-77.018137516], [38.97367729 ,-77.017674768], [38.973677494 ,-77.017526363], [38.973523805 ,-77.017504596], [38.973523488 ,-77.017649077], [38.973523171 ,-77.017793674], [38.973677454 ,-77.018440951], [38.973677333 ,-77.018306508], [38.973540887 ,-77.018418547], [38.974790838 ,-77.014421893], [38.974803243 ,-77.01456434], [38.974856415 ,-77.015174958], [38.974869219 ,-77.015321992], [38.974881971 ,-77.015468453], [38.974971039 ,-77.016491389], [38.973617592 ,-77.014467122], [38.973522661 ,-77.014534796],[38.973425841 ,-77.014603816], [38.973329257 ,-77.014672669], [38.972499154 ,-77.014181677], [38.973065264 ,-77.013669422], [38.973761384 ,-77.013039511], [38.974841143 ,-77.01372716], [38.972657863 ,-77.014038069], [38.972746966 ,-77.013957441], [38.97285049 ,-77.013863765], [38.972938342 ,-77.013784271], [38.973171438 ,-77.013573347], [38.973404606 ,-77.013362358], [38.973497902 ,-77.013277934],[38.973669486 ,-77.01312267], [38.973667773 ,-77.012922202], [38.973577957 ,-77.013003534], [38.973410534 ,-77.013155143], [38.972657863 ,-77.014038069], [38.972746966 ,-77.013957441], [38.97285049 ,-77.013863765], [38.972938342 ,-77.013784271], [38.973171438 ,-77.013573347], [38.973404606 ,-77.013362358], [38.973667773 ,-77.012922202], [38.973577957 ,-77.013003534], [38.973410534 ,-77.013155143], [38.985136368 ,-77.027187847], [38.985415535 ,-77.027546729], [38.985429497 ,-77.027881332], [38.983955691 ,-77.027343803], [38.984993732 ,-77.027004483], [38.985253505 ,-77.027338429], [38.985504234 ,-77.027977204], [38.985306759 ,-77.027723888], [38.984962863 ,-77.027282754], [38.983922763 ,-77.027204992], [38.984013925 ,-77.027589289], [38.984993732 ,-77.027004483], [38.985253505 ,-77.027338429], [38.985504234 ,-77.027977204], [38.985306759 ,-77.027723888], [38.984962863 ,-77.027282754], [38.983922763 ,-77.027204992], [38.984013925 ,-77.027589289], [38.978706732 ,-77.026323931], [38.979018053 ,-77.026333695],[38.981522986 ,-77.026415438], [38.98240763 ,-77.026435831], [38.983202665 ,-77.026449199], [38.983517922 ,-77.026454752], [38.983292832 ,-77.02667892], [38.982394835 ,-77.026659912], [38.981798933 ,-77.026647298], [38.976891406 ,-77.02041145], [38.977229773 ,-77.019916639], [38.977298659 ,-77.019858278], [38.978258444 ,-77.018977024], [38.978192463 ,-77.019089574], [38.978123372 ,-77.019197362], [38.978051119 ,-77.019302842], [38.977980082 ,-77.019406299], [38.977902507 ,-77.01950258], [38.977820714 ,-77.019600862], [38.977740869 ,-77.019691774], [38.97765686 ,-77.01978237], [38.977571216 ,-77.019869376], [38.977484411 ,-77.019951327], [38.977393576 ,-77.020031754], [38.977208595 ,-77.020180044], [38.97709449 ,-77.020263368], [38.97699741 ,-77.020334155], [38.976780469 ,-77.020492339], [38.977145059 ,-77.019985775], [38.977383203 ,-77.019782381], [38.977464309 ,-77.019700891], [38.978258444 ,-77.018977024], [38.978192463 ,-77.019089574], [38.978123372 ,-77.019197362], [38.978051119 ,-77.019302842],[38.977980082 ,-77.019406299], [38.977902507 ,-77.01950258], [38.977820714 ,-77.019600862], [38.977740869 ,-77.019691774], [38.97765686 ,-77.01978237], [38.977571216 ,-77.019869376], [38.977484411 ,-77.019951327], [38.977393576 ,-77.020031754], [38.977208595 ,-77.020180044], [38.97709449 ,-77.020263368], [38.97699741 ,-77.020334155], [38.976780469 ,-77.020492339], [38.977145059 ,-77.019985775], [38.977383203 ,-77.019782381], [38.977464309 ,-77.019700891], [38.959533206,-77.084970771],[38.960062981,-77.085241563],[38.960467456,-77.085693812],[38.960360753,-77.085639377],[38.960252795,-77.085584302],[38.960144167,-77.085528887],[38.959492148,-77.085196267],[38.959439083,-77.084922661],[38.95975785,-77.085085596],[38.960122049,-77.085271756],[38.960343513,-77.085384957],[38.960460645,-77.08544483],[38.960467456,-77.085693812],[38.960360753,-77.085639377],[38.960252795,-77.085584302],[38.960144167,-77.085528887],[38.959492148,-77.085196267],[38.959439083,-77.084922661],[38.95975785,-77.085085596],[38.960122049,-77.085271756],[38.960343513,-77.085384957],[38.960460645,-77.08544483],[38.96304403,-77.07399229],[38.96379498,-77.075050714],[38.963542485,-77.074903681],[38.963479979,-77.074617623],[38.963750231,-77.074775405],[38.963953462,-77.074073446],[38.964042145,-77.074584297],[38.965890742,-77.076272936],[38.965644816,-77.075877344],[38.965767845,-77.075149816],[38.965975169,-77.076528474],[38.966002953,-77.076087026],[38.966238836,-77.076224832],[38.966581921,-77.076425269],[38.963043971,-77.074123364],[38.963137789,-77.074871777],[38.963137759,-77.074954507],[38.963748483,-77.075023637],[38.963647452,-77.074964805],[38.963254891,-77.07448621],[38.963405878,-77.07457436],[38.963644655,-77.074713767],[38.964042108,-77.073983254],[38.964042118,-77.074140409],[38.964042127,-77.074289834],[38.964042137,-77.074448604],[38.964270024,-77.075078396],[38.964528891,-77.075229225],[38.964702348,-77.07557872],[38.964596756,-77.075517403],[38.964488538,-77.075454562],[38.964379746,-77.075391387],[38.964282441,-77.075334884],[38.964186612,-77.075279237],[38.965432647,-77.07600354],[38.965091394,-77.075555792],[38.965200421,-77.075619139],[38.965311827,-77.075683869],[38.965422497,-77.07574817],[38.965532344,-77.075811995],[38.965767501,-77.075748912],[38.965767587,-77.075598792],[38.965767673,-77.075448787],[38.965767759,-77.075298782],[38.966031569,-77.076658826],[38.96583963,-77.076907629],[38.965922701,-77.076675248],[38.966125977,-77.076158897],[38.964270024,-77.075078396],[38.964528891,-77.075229225],[38.964702348,-77.07557872],[38.964596756,-77.075517403],[38.964488538,-77.075454562],[38.964379746,-77.075391387],[38.964282441,-77.075334884],[38.964186612,-77.075279237],[38.965432647,-77.07600354],[38.965091394,-77.075555792],[38.965200421,-77.075619139],[38.965311827,-77.075683869],[38.965422497,-77.07574817],[38.965532344,-77.075811995],[38.965767501,-77.075748912],[38.965767587,-77.075598792],[38.965767673,-77.075448787],[38.965767759,-77.075298782],[38.963748483,-77.075023637],[38.963647452,-77.074964805],[38.963254891,-77.07448621],[38.963405878,-77.07457436],[38.963644655,-77.074713767],[38.962261924,-77.027810729],[38.961988528,-77.027832832],[38.960249976,-77.02819984],[38.960500474,-77.028180144],[38.964797642,-77.027605827],[38.964113553,-77.027891712],[38.964738539,-77.027840694],[38.965663367,-77.027759569],[38.966085281,-77.027850946],[38.967007027,-77.027408361],[38.966352918,-77.027698177],[38.966663801,-77.027669556],[38.966989241,-77.027639592],[38.967336453,-77.027069147],[38.967240403,-77.0267392],[38.962422402,-77.027797755],[38.962152511,-77.027819575],[38.96186545,-77.027842783],[38.961743541,-77.027852639],[38.961611742,-77.027863295],[38.959409556,-77.028265915],[38.959578234,-77.028252654],[38.960355444,-77.028191548],[38.960606662,-77.028171796],[38.960769765,-77.028158972],[38.961941958,-77.028064894],[38.962055702,-77.028056035],[38.962170166,-77.02804712],[38.964695148,-77.027614677],[38.964594995,-77.027623325],[38.964486555,-77.027632689],[38.964377396,-77.027642115],[38.964267876,-77.027651571],[38.964157095,-77.027661136],[38.964047034,-77.02767064],[38.964217838,-77.027883199],[38.964330483,-77.027874004],[38.964424069,-77.027866364],[38.964550558,-77.027856039],[38.964678665,-77.027845581],[38.96584952,-77.027513898],[38.965754841,-77.027521894],[38.965654127,-77.0275304],[38.965402448,-77.027782074],[38.965515876,-77.02777229],[38.965785512,-77.027749034],[38.965914039,-77.027737948],[38.966180625,-77.027268429],[38.96608536,-77.027984566],[38.966907457,-77.027417843],[38.966800769,-77.027428004],[38.966416728,-77.027464579],[38.966487784,-77.02768576],[38.966785908,-77.027658313],[38.967188709,-77.027621227],[38.967336485,-77.026922579],[38.967336516,-77.026788706],[38.967336544,-77.02665668],[38.967240474,-77.026862899],[38.967240561,-77.027011753],[38.967240636,-77.027142262],[38.962422402,-77.027797755],[38.962152511,-77.027819575],[38.96186545,-77.027842783],[38.961743541,-77.027852639],[38.961611742,-77.027863295],[38.959409556,-77.028265915],[38.959578234,-77.028252654],[38.960355444,-77.028191548],[38.960606662,-77.028171796],[38.960769765,-77.028158972],[38.961941958,-77.028064894],[38.962055702,-77.028056035],[38.962170166,-77.02804712],[38.964695148,-77.027614677],[38.964594995,-77.027623325],[38.964486555,-77.027632689],[38.964377396,-77.027642115],[38.964267876,-77.027651571],[38.964157095,-77.027661136],[38.964047034,-77.02767064],[38.964217838,-77.027883199],[38.964330483,-77.027874004],[38.964424069,-77.027866364],[38.964550558,-77.027856039],[38.964678665,-77.027845581],[38.96584952,-77.027513898],[38.965754841,-77.027521894],[38.965654127,-77.0275304],[38.965402448,-77.027782074],[38.965515876,-77.02777229],[38.965785512,-77.027749034],[38.965914039,-77.027737948],[38.966180625,-77.027268429],[38.96608536,-77.027984566],[38.966907457,-77.027417843],[38.966800769,-77.027428004],[38.966416728,-77.027464579],[38.966487784,-77.02768576],[38.966785908,-77.027658313],[38.967188709,-77.027621227],[38.967336485,-77.026922579],[38.967336516,-77.026788706],[38.967336544,-77.02665668],[38.967240474,-77.026862899],[38.967240561,-77.027011753],[38.967240636,-77.027142262],[38.973524114,-77.017363346],[38.973540894,-77.018479479],[38.974779851,-77.014295733],[38.974912427,-77.01706499],[38.974869325,-77.017186938],[38.974825889,-77.017308819],[38.974779284,-77.017441778],[38.97473513,-77.017576356],[38.974095151,-77.017926012],[38.974141768,-77.01813696],[38.974239956,-77.01813722],[38.974351839,-77.018137516],[38.97367729,-77.017674768],[38.973677494,-77.017526363],[38.973523805,-77.017504596],[38.973523488,-77.017649077],[38.973523171,-77.017793674],[38.973677454,-77.018440951],[38.973677333,-77.018306508],[38.973540887,-77.018418547],[38.974910705,-77.014521225],[38.974885136,-77.014229357],[38.974790838,-77.014421893],[38.974803243,-77.01456434],[38.974856415,-77.015174958],[38.974869219,-77.015321992],[38.974881971,-77.015468453],[38.974971039,-77.016491389],[38.973617592,-77.014467122],[38.973522661,-77.014534796],[38.973425841,-77.014603816],[38.973329257,-77.014672669],[38.972499154,-77.014181677],[38.974869325,-77.017186938],[38.974825889,-77.017308819],[38.974779284,-77.017441778],[38.97473513,-77.017576356],[38.974095151,-77.017926012],[38.974141768,-77.01813696],[38.974239956,-77.01813722],[38.974351839,-77.018137516],[38.97367729,-77.017674768],[38.973677494,-77.017526363],[38.973523805,-77.017504596],[38.973523488,-77.017649077],[38.973523171,-77.017793674],[38.973677454,-77.018440951],[38.973677333,-77.018306508],[38.973540887,-77.018418547],[38.974790838,-77.014421893],[38.974803243,-77.01456434],[38.974856415,-77.015174958],[38.974869219,-77.015321992],[38.974881971,-77.015468453],[38.974971039,-77.016491389],[38.973617592,-77.014467122],[38.973522661,-77.014534796],[38.973425841,-77.014603816],[38.973329257,-77.014672669],[38.972499154,-77.014181677],[38.973065264,-77.013669422],[38.973761384,-77.013039511],[38.974841143,-77.01372716],[38.972657863,-77.014038069],[38.972746966,-77.013957441],[38.97285049,-77.013863765],[38.972938342,-77.013784271],[38.973171438,-77.013573347],[38.973404606,-77.013362358],[38.973497902,-77.013277934],[38.973669486,-77.01312267],[38.973667773,-77.012922202],[38.973577957,-77.013003534],[38.973410534,-77.013155143],[38.972657863,-77.014038069],[38.972746966,-77.013957441],[38.97285049,-77.013863765],[38.972938342,-77.013784271],[38.973171438,-77.013573347],[38.973404606,-77.013362358],[38.973667773,-77.012922202],[38.973577957,-77.013003534],[38.973410534,-77.013155143],[38.985136368,-77.027187847],[38.985415535,-77.027546729],[38.985429497,-77.027881332],[38.983955691,-77.027343803],[38.984993732,-77.027004483],[38.985253505,-77.027338429],[38.985504234,-77.027977204],[38.985306759,-77.027723888],[38.984962863,-77.027282754],[38.983922763,-77.027204992],[38.984013925,-77.027589289],[38.984993732,-77.027004483],[38.985253505,-77.027338429],[38.985504234,-77.027977204],[38.985306759,-77.027723888],[38.984962863,-77.027282754],[38.983922763,-77.027204992],[38.984013925,-77.027589289],[38.978706732,-77.026323931],[38.979018053,-77.026333695],[38.981522986,-77.026415438],[38.98240763,-77.026435831],[38.983202665,-77.026449199],[38.983517922,-77.026454752],[38.983292832,-77.02667892],[38.982394835,-77.026659912],[38.981798933,-77.026647298],[38.976891406,-77.02041145],[38.977229773,-77.019916639],[38.977298659,-77.019858278],[38.978258444,-77.018977024],[38.978192463,-77.019089574],[38.978123372,-77.019197362],[38.978051119,-77.019302842],[38.977980082,-77.019406299],[38.977902507,-77.01950258],[38.977820714,-77.019600862],[38.977740869,-77.019691774],[38.97765686,-77.01978237],[38.977571216,-77.019869376],[38.977484411,-77.019951327],[38.977393576,-77.020031754],[38.977208595,-77.020180044],[38.97709449,-77.020263368],[38.97699741,-77.020334155],[38.976780469,-77.020492339],[38.977145059,-77.019985775],[38.977383203,-77.019782381],[38.977464309,-77.019700891],[38.978258444,-77.018977024],[38.978192463,-77.019089574],[38.978123372,-77.019197362],[38.978051119,-77.019302842],[38.977980082,-77.019406299],[38.977902507,-77.01950258],[38.977820714,-77.019600862],[38.977740869,-77.019691774],[38.97765686,-77.01978237],[38.977571216,-77.019869376],[38.977484411,-77.019951327],[38.977393576,-77.020031754],[38.977208595,-77.020180044],[38.97709449,-77.020263368],[38.97699741,-77.020334155],[38.976780469,-77.020492339],[38.977145059,-77.019985775],[38.977383203,-77.019782381],[38.977464309,-77.019700891],[38.959533206,-77.084970771],[38.960062981,-77.085241563],[38.960467456,-77.085693812],[38.960360753,-77.085639377],[38.960252795,-77.085584302],[38.960144167,-77.085528887],[38.959492148,-77.085196267],[38.959439083,-77.084922661],[38.95975785,-77.085085596],[38.960122049,-77.085271756],[38.960343513,-77.085384957],[38.960460645,-77.08544483],[38.960467456,-77.085693812],[38.960360753,-77.085639377],[38.960252795,-77.085584302],[38.960144167,-77.085528887],[38.959492148,-77.085196267],[38.959439083,-77.084922661],[38.95975785,-77.085085596],[38.960122049,-77.085271756],[38.960343513,-77.085384957],[38.960460645,-77.08544483],[38.96304403,-77.07399229],[38.96379498,-77.075050714],[38.963542485,-77.074903681],[38.963479979,-77.074617623],[38.963750231,-77.074775405],[38.963953462,-77.074073446],[38.964042145,-77.074584297],[38.965890742,-77.076272936],[38.965644816,-77.075877344],[38.965767845,-77.075149816],[38.965975169,-77.076528474],[38.966002953,-77.076087026],[38.966238836,-77.076224832],[38.966581921,-77.076425269],[38.963043971,-77.074123364],[38.963137789,-77.074871777],[38.963137759,-77.074954507],[38.963748483,-77.075023637],[38.963647452,-77.074964805],[38.963254891,-77.07448621],[38.963405878,-77.07457436],[38.963644655,-77.074713767],[38.964042108,-77.073983254],[38.964042118,-77.074140409],[38.964042127,-77.074289834],[38.964042137,-77.074448604],[38.964270024,-77.075078396],[38.964528891,-77.075229225],[38.964702348,-77.07557872],[38.964596756,-77.075517403],[38.964488538,-77.075454562],[38.964379746,-77.075391387],[38.964282441,-77.075334884],[38.964186612,-77.075279237],[38.965432647,-77.07600354],[38.965091394,-77.075555792],[38.965200421,-77.075619139],[38.965311827,-77.075683869],[38.965422497,-77.07574817],[38.965532344,-77.075811995],[38.965767501,-77.075748912],[38.965767587,-77.075598792],[38.965767673,-77.075448787],[38.965767759,-77.075298782],[38.966031569,-77.076658826],[38.96583963,-77.076907629],[38.965922701,-77.076675248],[38.966125977,-77.076158897],[38.964270024,-77.075078396],[38.964528891,-77.075229225],[38.964702348,-77.07557872],[38.964596756,-77.075517403],[38.964488538,-77.075454562],[38.964379746,-77.075391387],[38.964282441,-77.075334884],[38.964186612,-77.075279237],[38.965432647,-77.07600354],[38.965091394,-77.075555792],[38.965200421,-77.075619139],[38.965311827,-77.075683869],[38.965422497,-77.07574817],[38.965532344,-77.075811995],[38.965767501,-77.075748912],[38.965767587,-77.075598792],[38.965767673,-77.075448787],[38.965767759,-77.075298782],[38.963748483,-77.075023637],[38.963647452,-77.074964805],[38.963254891,-77.07448621],[38.963405878,-77.07457436],[38.963644655,-77.074713767],[38.962261924,-77.027810729],[38.961988528,-77.027832832],[38.960249976,-77.02819984],[38.960500474,-77.028180144],[38.964797642,-77.027605827],[38.964113553,-77.027891712],[38.964738539,-77.027840694],[38.965663367,-77.027759569],[38.966085281,-77.027850946],[38.967007027,-77.027408361],[38.966352918,-77.027698177],[38.966663801,-77.027669556],[38.966989241,-77.027639592],[38.967336453,-77.027069147],[38.967240403,-77.0267392],[38.962422402,-77.027797755],[38.962152511,-77.027819575],[38.96186545,-77.027842783],[38.961743541,-77.027852639],[38.961611742,-77.027863295],[38.959409556,-77.028265915],[38.959578234,-77.028252654],[38.960355444,-77.028191548],[38.960606662,-77.028171796],[38.960769765,-77.028158972],[38.961941958,-77.028064894],[38.962055702,-77.028056035],[38.962170166,-77.02804712],[38.964695148,-77.027614677],[38.964594995,-77.027623325],[38.964486555,-77.027632689],[38.964377396,-77.027642115],[38.964267876,-77.027651571],[38.964157095,-77.027661136],[38.964047034,-77.02767064],[38.964217838,-77.027883199],[38.964330483,-77.027874004],[38.964424069,-77.027866364],[38.964550558,-77.027856039],[38.964678665,-77.027845581],[38.96584952,-77.027513898],[38.965754841,-77.027521894],[38.965654127,-77.0275304],[38.965402448,-77.027782074],[38.965515876,-77.02777229],[38.965785512,-77.027749034],[38.965914039,-77.027737948],[38.966180625,-77.027268429],[38.96608536,-77.027984566],[38.966907457,-77.027417843],[38.966800769,-77.027428004],[38.966416728,-77.027464579],[38.966487784,-77.02768576],[38.966785908,-77.027658313],[38.967188709,-77.027621227],[38.967336485,-77.026922579],[38.967336516,-77.026788706],[38.967336544,-77.02665668],[38.967240474,-77.026862899],[38.967240561,-77.027011753],[38.967240636,-77.027142262],[38.962422402,-77.027797755],[38.962152511,-77.027819575],[38.96186545,-77.027842783],[38.961743541,-77.027852639],[38.961611742,-77.027863295],[38.959409556,-77.028265915],[38.959578234,-77.028252654],[38.960355444,-77.028191548],[38.960606662,-77.028171796],[38.960769765,-77.028158972],[38.961941958,-77.028064894],[38.962055702,-77.028056035],[38.962170166,-77.02804712],[38.964695148,-77.027614677],[38.964594995,-77.027623325],[38.964486555,-77.027632689],[38.964377396,-77.027642115],[38.964267876,-77.027651571],[38.964157095,-77.027661136],[38.964047034,-77.02767064],[38.964217838,-77.027883199],[38.964330483,-77.027874004],[38.964424069,-77.027866364],[38.964550558,-77.027856039],[38.964678665,-77.027845581],[38.96584952,-77.027513898],[38.965754841,-77.027521894],[38.965654127,-77.0275304],[38.965402448,-77.027782074],[38.965515876,-77.02777229],[38.965785512,-77.027749034],[38.965914039,-77.027737948],[38.966180625,-77.027268429],[38.96608536,-77.027984566],[38.966907457,-77.027417843],[38.966800769,-77.027428004],[38.966416728,-77.027464579],[38.966487784,-77.02768576],[38.966785908,-77.027658313],[38.967188709,-77.027621227],[38.967336485,-77.026922579],[38.967336516,-77.026788706],[38.967336544,-77.02665668],[38.967240474,-77.026862899],[38.967240561,-77.027011753],[38.967240636,-77.027142262],[38.973524114,-77.017363346],[38.973540894,-77.018479479],[38.974779851,-77.014295733],[38.974912427,-77.01706499],[38.974869325,-77.017186938],[38.974825889,-77.017308819],[38.974779284,-77.017441778],[38.97473513,-77.017576356],[38.974095151,-77.017926012],[38.974141768,-77.01813696],[38.974239956,-77.01813722],[38.974351839,-77.018137516],[38.97367729,-77.017674768],[38.973677494,-77.017526363],[38.973523805,-77.017504596],[38.973523488,-77.017649077],[38.973523171,-77.017793674],[38.973677454,-77.018440951],[38.973677333,-77.018306508],[38.973540887,-77.018418547],[38.974910705,-77.014521225],[38.974885136,-77.014229357],[38.974790838,-77.014421893],[38.974803243,-77.01456434],[38.974856415,-77.015174958],[38.974869219,-77.015321992],[38.974881971,-77.015468453],[38.974971039,-77.016491389],[38.973617592,-77.014467122],[38.973522661,-77.014534796],[38.973425841,-77.014603816],[38.973329257,-77.014672669],[38.972499154,-77.014181677],[38.974869325,-77.017186938],[38.974825889,-77.017308819],[38.974779284,-77.017441778],[38.97473513,-77.017576356],[38.974095151,-77.017926012],[38.974141768,-77.01813696],[38.974239956,-77.01813722],[38.974351839,-77.018137516],[38.97367729,-77.017674768],[38.973677494,-77.017526363],[38.973523805,-77.017504596],[38.973523488,-77.017649077],[38.973523171,-77.017793674],[38.973677454,-77.018440951],[38.973677333,-77.018306508],[38.973540887,-77.018418547],[38.974790838,-77.014421893],[38.974803243,-77.01456434],[38.974856415,-77.015174958],[38.974869219,-77.015321992],[38.974881971,-77.015468453],[38.974971039,-77.016491389],[38.973617592,-77.014467122],[38.973522661,-77.014534796],[38.973425841,-77.014603816],[38.973329257,-77.014672669],[38.972499154,-77.014181677],[38.973065264,-77.013669422],[38.973761384,-77.013039511],[38.974841143,-77.01372716],[38.972657863,-77.014038069],[38.972746966,-77.013957441],[38.97285049,-77.013863765],[38.972938342,-77.013784271],[38.973171438,-77.013573347],[38.973404606,-77.013362358],[38.973497902,-77.013277934],[38.973669486,-77.01312267],[38.973667773,-77.012922202],[38.973577957,-77.013003534],[38.973410534,-77.013155143],[38.972657863,-77.014038069],[38.972746966,-77.013957441],[38.97285049,-77.013863765],[38.972938342,-77.013784271],[38.973171438,-77.013573347],[38.973404606,-77.013362358],[38.973667773,-77.012922202],[38.973577957,-77.013003534],[38.973410534,-77.013155143],[38.985136368,-77.027187847],[38.985415535,-77.027546729],[38.985429497,-77.027881332],[38.983955691,-77.027343803],[38.984993732,-77.027004483],[38.985253505,-77.027338429],[38.985504234,-77.027977204],[38.985306759,-77.027723888],[38.984962863,-77.027282754],[38.983922763,-77.027204992],[38.984013925,-77.027589289],[38.984993732,-77.027004483],[38.985253505,-77.027338429],[38.985504234,-77.027977204],[38.985306759,-77.027723888],[38.984962863,-77.027282754],[38.983922763,-77.027204992],[38.984013925,-77.027589289],[38.978706732,-77.026323931],[38.979018053,-77.026333695],[38.981522986,-77.026415438],[38.98240763,-77.026435831],[38.983202665,-77.026449199],[38.983517922,-77.026454752],[38.983292832,-77.02667892],[38.982394835,-77.026659912],[38.981798933,-77.026647298],[38.976891406,-77.02041145],[38.977229773,-77.019916639],[38.977298659,-77.019858278],[38.978258444,-77.018977024],[38.978192463,-77.019089574],[38.978123372,-77.019197362],[38.978051119,-77.019302842],[38.977980082,-77.019406299],[38.977902507,-77.01950258],[38.977820714,-77.019600862],[38.977740869,-77.019691774],[38.97765686,-77.01978237],[38.977571216,-77.019869376],[38.977484411,-77.019951327],[38.977393576,-77.020031754],[38.977208595,-77.020180044],[38.97709449,-77.020263368],[38.97699741,-77.020334155],[38.976780469,-77.020492339],[38.977145059,-77.019985775],[38.977383203,-77.019782381],[38.977464309,-77.019700891],[38.978258444,-77.018977024],[38.978192463,-77.019089574],[38.978123372,-77.019197362],[38.978051119,-77.019302842],[38.977980082,-77.019406299],[38.977902507,-77.01950258],[38.977820714,-77.019600862],[38.977740869,-77.019691774],[38.97765686,-77.01978237],[38.977571216,-77.019869376],[38.977484411,-77.019951327],[38.977393576,-77.020031754],[38.977208595,-77.020180044],[38.97709449,-77.020263368],[38.97699741,-77.020334155],[38.976780469,-77.020492339],[38.977145059,-77.019985775],[38.977383203,-77.019782381],[38.977464309,-77.01970089] ];
var features = [];

var point = L.marker([40, -75], {
	icon: L.mapbox.marker.icon({ "marker-symbol": "pitch", "marker-color": "#2980b9"})
}).addTo(map);
var circleFilter = L.circle([40,-75], 200, {
  opacity: 1,
  fillOpacity: 0.4
}).addTo(map); 

$('#menu').click(function() {
	$('ul').slideToggle(300);
});

function update(latlng) {
	map.setView([latlng.lat, latlng.lng], 15);
	circleFilter.setLatLng(latlng);
	point.setLatLng(latlng);
	var me = turf.point([latlng.lng, latlng.lat]);
 
	for(var i=0; i<addressPoints.length; i++) {
		var a = addressPoints[i]; 
		var marker = turf.point(a[1],a[0], {
			"marker-color": "#2ecc71",
			"marker-symbol": "parking"
		});
		features.push(marker); 
	}
	
	var fc = turf.featurecollection(features);  
		
	var nearest = turf.nearest(me, fc); 
	nearest.properties = {
		"marker-color": "#8e44ad", 
		"marker-size": "large", 
		"marker-symbol": "star-stroked"
	}; 

	var nearest_fc = turf.featurecollection([nearest]); 

	L.mapbox.featureLayer().setGeoJSON(nearest_fc).addTo(map);
}

function locate() {
	if(navigator.geolocation) {
		map.locate();
	}

	map.on('locationfound', function(e) {
		update(e.latlng);	    
	});
}

$('#locate').click(function(){
  locate();  
}); 

locate();  
