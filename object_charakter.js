// Objekt Charakter
let Char = {
	//Karmapunkte
		Karma: {Start: 750, MetaKost: 0, EigKost: 0, Ges: 750 },
	//Metatyp
		Meta: {Choice: "Norm", EigBonus: 0, KKost: 0},
	//Eigenschaften
		Eig : {Kon : {Start: 1, Erh: 0, Ges: 1, KarKost: 0}, Str : {Start: 1, Erh: 0, Ges: 1, KarKost: 0}, Rea : {Start: 1, Erh: 0, Ges: 1, KarKost: 0}, Gek : {Start: 1, Erh: 0, Ges: 1, KarKost: 0}, Wil : {Start: 1, Erh: 0, Ges: 1, KarKost: 0}, Log : {Start: 1, Erh: 0, Ges: 1, KarKost: 0}, Int : {Start: 1, Erh: 0, Ges: 1, KarKost: 0}, Cha : {Start: 1, Erh: 0, Ges: 1, KarKost: 0},},
	//Vor und Nachteile
		Spez : {VTeil :{eins: "dings",zwei : 2},NTeil :{}},
	//Fähigkeiten
		Fah :{Ast : {Wert: 0, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Ath : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Bes : {Wert: 0, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Bio : {Wert: 0, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Cra : {Wert: 0, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Ein : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Ele : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Exo : {Wert: 0, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Feu : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Hei : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Hex : {Wert: 0, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Mec : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Nah : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Nat : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Ste : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Tas : {Wert: 0, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Ube : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Ver : {Wert: 0, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},Wah : {Wert: 1, Erh: 0, SFert: 0, Ges: 1, KarKost: 0},},
	//Ressourcen
		Res : {},
}

// ############################################################
// ################  Karma eingabe ############################
// ############################################################

//Berechnung Strtkarma aus Eingabe
function StartKarma (){
	document.getElementById("KEingabeWert").value = Char.Karma.Start
};
//Gesamt Karma
function GesKarmaBer (){
	Char.Karma.Ges = Char.Karma.Start - Char.Karma.MetaKost - Char.Karma.EigKost;
}
//Karmakosten aus Eigenschaftserhöhungen
function EigKostBer (){
	Char.Karma.EigKost = Char.Eig.Kon.KarKost +	Char.Eig.Str.KarKost +	Char.Eig.Rea.KarKost +	Char.Eig.Gek.KarKost +	Char.Eig.Wil.KarKost +	Char.Eig.Int.KarKost +	Char.Eig.Log.KarKost + Char.Eig.Cha.KarKost;
	GesKarmaBer ();
	Ausgabe ();
}
//Karma neue Eingabe
function ChangeKarma (){
	// Nehme Wert aus Form (KEingabe)
	document.getElementById("KEingabeWert").onchange = function (){
		Char.Karma.Start = parseInt(document.getElementById("KEingabeWert").value);
		GesKarmaBer ();
		Ausgabe ();
	};
}/*FEHLER -> Beim Drücken von Enter während man im Karmaform ist, setzt wert auf Anfangswert zurück*/


// #############################################################
// ################  Metatyp eingabe ###########################
// #############################################################

//Eigenschaftsbonus
function MetaEigBonBer(){
			if(Char.Meta.Choice == "Elf"){Char.Eig.Kon.Start = 1; Char.Eig.Str.Start = 1; Char.Eig.Rea.Start = 1; Char.Eig.Gek.Start = 2; Char.Eig.Wil.Start = 1; Char.Eig.Log.Start = 1; Char.Eig.Int.Start = 1; Char.Eig.Cha.Start = 3;Char.Karma.MetaKost = 20;GesKarmaBer ();EigGesBer ();
			} else if (Char.Meta.Choice == "Norm"){Char.Eig.Kon.Start = 1; Char.Eig.Str.Start = 1; Char.Eig.Rea.Start = 1; Char.Eig.Gek.Start = 1; Char.Eig.Wil.Start = 1; Char.Eig.Log.Start = 1; Char.Eig.Int.Start = 1; Char.Eig.Cha.Start = 1;Char.Karma.MetaKost = 0;GesKarmaBer ();EigGesBer ();				
			} else if (Char.Meta.Choice == "Ork"){Char.Eig.Kon.Start = 3;Char.Eig.Str.Start = 3;Char.Eig.Rea.Start = 1;Char.Eig.Gek.Start = 1;Char.Eig.Wil.Start = 1;Char.Eig.Log.Start = 1;Char.Eig.Int.Start = 1;Char.Eig.Cha.Start = 1;Char.Karma.MetaKost = 30;GesKarmaBer ();EigGesBer ();
			} else if (Char.Meta.Choice == "Troll"){Char.Eig.Kon.Start = 4;Char.Eig.Str.Start = 3;Char.Eig.Rea.Start = 1;Char.Eig.Gek.Start = 1;Char.Eig.Wil.Start = 1;Char.Eig.Log.Start = 1;Char.Eig.Int.Start = 1;Char.Eig.Cha.Start = 1;Char.Karma.MetaKost = 40;GesKarmaBer ();EigGesBer ();
			} else if (Char.Meta.Choice == "Zwerg"){Char.Eig.Kon.Start = 2;Char.Eig.Str.Start = 3;Char.Eig.Rea.Start = 1;Char.Eig.Gek.Start = 1;Char.Eig.Wil.Start = 2;Char.Eig.Log.Start = 1;Char.Eig.Int.Start = 1;Char.Eig.Cha.Start = 1;Char.Karma.MetaKost = 30;GesKarmaBer ();EigGesBer ();};
			Ausgabe ();
			// Der Gesamtwert muss noch berechnet werden!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			
		};

//Änderung des Objekts auf gewählten Metatyp
function newMetaT (){
	Char.Meta.Choice = document.getElementById("Metatyp").value; 
	MetaEigBonBer();
	Ausgabe ();
}

//Checken des Button für Metatypauswahl
function ChangeMeta (){
	document.getElementById("Metatyp").onchange = function (){
		newMetaT ();		
	}
};

// #############################################################
// ##################  Eigenschaften ###########################
// #############################################################

//Karmakosten berechnung
function EigKarKostBer (){
	Char.Eig.Kon.KarKost = Char.Eig.Kon.Erh *15;
	Char.Eig.Str.KarKost = Char.Eig.Str.Erh *15;
	Char.Eig.Rea.KarKost = Char.Eig.Rea.Erh *15;
	Char.Eig.Gek.KarKost = Char.Eig.Gek.Erh *15;
	Char.Eig.Wil.KarKost = Char.Eig.Wil.Erh *15;
	Char.Eig.Int.KarKost = Char.Eig.Int.Erh *15;
	Char.Eig.Log.KarKost = Char.Eig.Log.Erh *15;
	Char.Eig.Cha.KarKost = Char.Eig.Cha.Erh *15;
	EigKostBer ();
}

//Berechnung der Gesamtwerte
function EigGesBer (){
	Char.Eig.Kon.Ges = Char.Eig.Kon.Start + Char.Eig.Kon.Erh;
	Char.Eig.Str.Ges = Char.Eig.Str.Start + Char.Eig.Str.Erh;
	Char.Eig.Rea.Ges = Char.Eig.Rea.Start + Char.Eig.Rea.Erh;
	Char.Eig.Gek.Ges = Char.Eig.Gek.Start + Char.Eig.Gek.Erh;
	Char.Eig.Wil.Ges = Char.Eig.Wil.Start + Char.Eig.Wil.Erh;
	Char.Eig.Int.Ges = Char.Eig.Int.Start + Char.Eig.Int.Erh;
	Char.Eig.Log.Ges = Char.Eig.Log.Start + Char.Eig.Log.Erh;
	Char.Eig.Cha.Ges = Char.Eig.Cha.Start + Char.Eig.Cha.Erh;
}

//Veränderung der Werte
function EigWCheck (){
	//Konstitution
	document.getElementById("KonUp").onclick = function (){
		Char.Eig.Kon.Erh = Char.Eig.Kon.Erh + 1; 
		EigGesBer ();
		EigKarKostBer ();
		Ausgabe ();
	}; 
	document.getElementById("KonDown").onclick = function (){
		Char.Eig.Kon.Erh = Char.Eig.Kon.Erh - 1; 
		EigGesBer ();EigKarKostBer ();Ausgabe ();
	};	
	//Stärke
	document.getElementById("StrUp").onclick = function (){ Char.Eig.Str.Erh = Char.Eig.Str.Erh + 1; EigGesBer ();EigKarKostBer ();Ausgabe ();}; document.getElementById("StrDown").onclick = function (){ Char.Eig.Str.Erh = Char.Eig.Str.Erh - 1; EigGesBer ();EigKarKostBer ();Ausgabe ();};	
	//Reaktion
	document.getElementById("ReaUp").onclick = function (){Char.Eig.Rea.Erh = Char.Eig.Rea.Erh + 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};	document.getElementById("ReaDown").onclick = function (){Char.Eig.Rea.Erh = Char.Eig.Rea.Erh - 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};	
	//Geschicklichkeit
	document.getElementById("GekUp").onclick = function (){Char.Eig.Gek.Erh = Char.Eig.Gek.Erh + 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};document.getElementById("GekDown").onclick = function (){Char.Eig.Gek.Erh = Char.Eig.Gek.Erh - 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};	
	//Willenskraft
	document.getElementById("WilUp").onclick = function (){Char.Eig.Wil.Erh = Char.Eig.Wil.Erh + 1;	EigGesBer ();EigKarKostBer ();Ausgabe ();};	document.getElementById("WilDown").onclick = function (){	Char.Eig.Wil.Erh = Char.Eig.Wil.Erh - 1;	EigGesBer ();EigKarKostBer ();Ausgabe ();};	
	//Intuition
	document.getElementById("IntUp").onclick = function (){Char.Eig.Int.Erh = Char.Eig.Int.Erh + 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};document.getElementById("IntDown").onclick = function (){Char.Eig.Int.Erh = Char.Eig.Int.Erh - 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};
	//Logil
	document.getElementById("LogUp").onclick = function (){Char.Eig.Log.Erh = Char.Eig.Log.Erh + 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};document.getElementById("LogDown").onclick = function (){Char.Eig.Log.Erh = Char.Eig.Log.Erh - 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};	
	//Charisma
	document.getElementById("ChaUp").onclick = function (){Char.Eig.Cha.Erh = Char.Eig.Cha.Erh + 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};document.getElementById("ChaDown").onclick = function (){Char.Eig.Cha.Erh = Char.Eig.Cha.Erh - 1;EigGesBer ();EigKarKostBer ();Ausgabe ();};
};

// #############################################################
// #####################  Fähigkeiten ##########################
// #############################################################

//Allgemein 
function FahUp (p1){p2 = p1 + 1;};
function FahDown (p1){p2 = p1 - 1;};

//RückgabeWerte
/*Astral*/function BackAst(p2){Char.Fah.Ast.Erh = p2; p1 = Char.Fah.Ast.Erh;};
/*Athletik*/function BackAth(p2){Char.Fah.Ath.Erh = p2; p1 = Char.Fah.Ath.Erh;};
/*Beschwören*/function BackBes(p2){Char.Fah.Bes.Erh = p2; p1 = Char.Fah.Bes.Erh;};
/*Biotech*/function BackBio(p2){Char.Fah.Bio.Erh = p2; p1 = Char.Fah.Bio.Erh;};
/*Cracken*/function BackCra(p2){Char.Fah.Cra.Erh = p2; p1 = Char.Fah.Cra.Erh;};
/*Einfluss*/function BackEin(p2){Char.Fah.Ein.Erh = p2; p1 = Char.Fah.Ein.Erh;};
/*Elektronik*/function BackEle(p2){Char.Fah.Ele.Erh = p2; p1 = Char.Fah.Ele.Erh;};
/*Exotische Waffen*/function BackExo(p2){Char.Fah.Exo.Erh = p2; p1 = Char.Fah.Exo.Erh;};
/*Feuerwaffen*/function BackFeu(p2){Char.Fah.Feu.Erh = p2; p1 = Char.Fah.Feu.Erh;};
/*Heimlichkeit*/function BackHei(p2){Char.Fah.Hei.Erh = p2; p1 = Char.Fah.Hei.Erh;};
/*Hexerei*/function BackHex(p2){Char.Fah.Hex.Erh = p2; p1 = Char.Fah.Hex.Erh;};
/*Mechanik*/function BackMec(p2){Char.Fah.Mec.Erh = p2; p1 = Char.Fah.Mec.Erh;};
/*Nahkampf*/function BackNah(p2){Char.Fah.Nah.Erh = p2; p1 = Char.Fah.Nah.Erh;};
/*Natur*/function BackNat(p2){Char.Fah.Nat.Erh = p2; p1 = Char.Fah.Nat.Erh;};
/*Steuern*/function BackSte(p2){Char.Fah.Ste.Erh = p2; p1 = Char.Fah.Ste.Erh;};
/*Tasken*/function BackTas(p2){Char.Fah.Tas.Erh = p2; p1 = Char.Fah.Tas.Erh;};
/*Überreden*/function BackUbe(p2){Char.Fah.Ube.Erh = p2; p1 = Char.Fah.Ube.Erh;};
/*Verzaubern*/function BackVer(p2){Char.Fah.Ver.Erh = p2; p1 = Char.Fah.Ver.Erh;};
/* Wahrnehmung*/function BackWah(p2){Char.Fah.Wah.Erh = p2; p1 = Char.Fah.Wah.Erh;};		

//Fähigkeiten Karmakosten
function FahKarKostBer (){
	Char.Fah.Ast.KarKost = Char.Fah.Ast.Erh *15;
	Char.Fah.Ath.KarKost = Char.Fah.Ath.Erh *15;
	Char.Fah.Bes.KarKost = Char.Fah.Bes.Erh *15;
	Char.Fah.Bio.KarKost = Char.Fah.Bio.Erh *15;
	Char.Fah.Cra.KarKost = Char.Fah.Cra.Erh *15;
	Char.Fah.Ein.KarKost = Char.Fah.Ein.Erh *15;
	Char.Fah.Ele.KarKost = Char.Fah.Ele.Erh *15;
	Char.Fah.Exo.KarKost = Char.Fah.Exo.Erh *15;
	Char.Fah.Feu.KarKost = Char.Fah.Feu.Erh *15;
	Char.Fah.Hei.KarKost = Char.Fah.Hei.Erh *15;
	Char.Fah.Hex.KarKost = Char.Fah.Hex.Erh *15;
	Char.Fah.Mec.KarKost = Char.Fah.Mec.Erh *15;
	Char.Fah.Nah.KarKost = Char.Fah.Nah.Erh *15;
	Char.Fah.Nat.KarKost = Char.Fah.Nat.Erh *15;
	Char.Fah.Ste.KarKost = Char.Fah.Ste.Erh *15;
	Char.Fah.Tas.KarKost = Char.Fah.Tas.Erh *15;
	Char.Fah.Ube.KarKost = Char.Fah.Ube.Erh *15;
	Char.Fah.Ver.KarKost = Char.Fah.Ver.Erh *15;
	Char.Fah.Wah.KarKost = Char.Fah.Wah.Erh *15;
	EigKostBer ();
}




//Eigentliche Fähigkeitswertänderungen bei onclick-Event		
function FahWerte (){
	/*Fähigkeit Astral*/
	document.getElementById("FahAstUp").onclick =function(p1){
		p1 = Char.Fah.Ast.Erh;FahUp (p1);BackAst(p2);
		FahKarKostBer();
		Ausgabe ();
	};
	document.getElementById("FahAstDown").onclick =function(p1){
		p1 = Char.Fah.Ast.Erh;FahDown (p1);BackAst(p2);
		FahKarKostBer();
		Ausgabe ();
	};
	/*Fähigkeit Athletik*/
	document.getElementById("FahAthUp").onclick =function(p1){
		p1 = Char.Fah.Ath.Erh;FahUp (p1);BackAth(p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahAthDown").onclick =function(p1){
		p1 = Char.Fah.Ath.Erh;FahDown (p1);BackAth(p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Beschwören*/
	document.getElementById("FahBesUp").onclick =function(p1){
		p1 = Char.Fah.Bes.Erh;FahUp (p1);BackBes(p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahBesDown").onclick =function(p1){
		p1 = Char.Fah.Bes.Erh;FahDown (p1);BackBes(p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Biotech*/
	document.getElementById("FahBioUp").onclick =function(p1){
		p1 = Char.Fah.Bio.Erh;FahUp (p1);BackBio (p2);FahKarKostBer();	Ausgabe ();
	};
	document.getElementById("FahBioDown").onclick =function(p1){
		p1 = Char.Fah.Bio.Erh;FahDown (p1);BackBio (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Cracken*/
	document.getElementById("FahCraUp").onclick =function(p1){
		p1 = Char.Fah.Cra.Erh;FahUp (p1);BackCra (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahCraDown").onclick =function(p1){
		p1 = Char.Fah.Cra.Erh;FahDown (p1);BackCra (p2);FahKarKostBer();Ausgabe ();
	};/*Fähigkeit Einfluss*/
	document.getElementById("FahEinUp").onclick =function(p1){
		p1 = Char.Fah.Ein.Erh;FahUp (p1);BackEin (p2);FahKarKostBer();Ausgabe ();
	};document.getElementById("FahEinDown").onclick =function(p1){
		p1 = Char.Fah.Ein.Erh;FahDown (p1);BackEin (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Elektronik*/
	document.getElementById("FahEleUp").onclick =function(p1){
		p1 = Char.Fah.Ele.Erh;FahUp (p1);BackEle (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahEleDown").onclick =function(p1){
		p1 = Char.Fah.Ele.Erh;FahDown (p1);BackEle (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Exotische Waffen*/
	document.getElementById("FahExoUp").onclick =function(p1){
		p1 = Char.Fah.Exo.Erh;FahUp (p1);BackExo (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahExoDown").onclick =function(p1){
		p1 = Char.Fah.Exo.Erh;FahDown (p1);BackExo (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Feuerwaffen*/
	document.getElementById("FahFeuUp").onclick =function(p1){
		p1 = Char.Fah.Feu.Erh;FahUp (p1);BackFeu (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahFeuDown").onclick =function(p1){
		p1 = Char.Fah.Feu.Erh;FahDown (p1);BackFeu (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Heimlichkeit*/
	document.getElementById("FahHeiUp").onclick =function(p1){
		p1 = Char.Fah.Hei.Erh;FahUp (p1);BackHei (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahHeiDown").onclick =function(p1){
		p1 = Char.Fah.Hei.Erh;FahDown (p1);BackHei (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Hexerei*/
	document.getElementById("FahHexUp").onclick =function(p1){
		p1 = Char.Fah.Hex.Erh;FahUp (p1);BackHex (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahHexDown").onclick =function(p1){
		p1 = Char.Fah.Hex.Erh;FahDown (p1);BackHex (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Mechanik*/
	document.getElementById("FahMecUp").onclick =function(p1){
		p1 = Char.Fah.Mec.Erh;FahUp (p1);BackMec (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahMecDown").onclick =function(p1){
		p1 = Char.Fah.Mec.Erh;FahDown (p1);BackMec (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Nahkampf*/
	document.getElementById("FahNahUp").onclick =function(p1){
		p1 = Char.Fah.Nah.Erh;FahUp (p1);BackNah (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahNahDown").onclick =function(p1){
		p1 = Char.Fah.Nah.Erh;FahDown (p1);BackNah (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Natur*/
	document.getElementById("FahNatUp").onclick =function(p1){
		p1 = Char.Fah.Nat.Erh;FahUp (p1);BackNat (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahNatDown").onclick =function(p1){
		p1 = Char.Fah.Nat.Erh;FahDown (p1);BackNat (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Steuern*/
	document.getElementById("FahSteUp").onclick =function(p1){
		p1 = Char.Fah.Ste.Erh;FahUp (p1);BackSte (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahSteDown").onclick =function(p1){
		p1 = Char.Fah.Ste.Erh;FahDown (p1);BackSte (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Tasken*/
	document.getElementById("FahTasUp").onclick =function(p1){
		p1 = Char.Fah.Tas.Erh;FahUp (p1);BackTas (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahTasDown").onclick =function(p1){
		p1 = Char.Fah.Tas.Erh;FahDown (p1);BackTas (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Überreden*/
	document.getElementById("FahUbeUp").onclick =function(p1){
		p1 = Char.Fah.Ube.Erh;FahUp (p1);BackUbe (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahUbeDown").onclick =function(p1){
		p1 = Char.Fah.Ube.Erh;FahDown (p1);BackUbe (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Verzaubern*/
	document.getElementById("FahVerUp").onclick =function(p1){
		p1 = Char.Fah.Ver.Erh;FahUp (p1);BackVer (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahVerDown").onclick =function(p1){
		p1 = Char.Fah.Ver.Erh;FahDown (p1);BackVer (p2);FahKarKostBer();Ausgabe ();
	};
	/*Fähigkeit Wahrnehmung*/
	document.getElementById("FahWahUp").onclick =function(p1){
		p1 = Char.Fah.Wah.Erh;FahUp (p1);BackWah (p2);FahKarKostBer();Ausgabe ();
	};
	document.getElementById("FahWahDown").onclick =function(p1){
		p1 = Char.Fah.Wah.Erh;FahDown (p1);BackWah (p2);FahKarKostBer();Ausgabe ();
	};
	
//
};

// #############################################################
// ####################  Vor/Nachteile #########################
// #############################################################
let InaktSpez = ["Geist", "Chamäleon"];



function SpezHinz (){
	console.log(Char.Spez.VTeil);
	
	
	
	
//Ausgabe aller Vorteile
document.getElementById("AktiveVorT").value = Char.Spez.VTeil.eins;


	
	document.getElementById("VorTHinz1").onclick = function (){
	//Char.Spez.VTeil	
		
		
	//document.getElementById("AktiveVorT").value = "Analytischer Geist";
	};	
};



// #############################################################
/* #################  Allgemeine Werte #######################*/ 
// #############################################################


// Anzeigen/Ausgaben der Werte
function Ausgabe () {
	//Karmawerte
	document.getElementById("KarStart").value = Char.Karma.Start;
	document.getElementById("KarMetaKost").value = Char.Karma.MetaKost;
	document.getElementById("KarEigKost").value = Char.Karma.EigKost;
	document.getElementById("KarGes").value = Char.Karma.Ges;
	//Metatyp
	document.getElementById("MetatypOutput").value = Char.Meta.Choice;
	//Eigenschaften
	document.getElementById("KonStartAusg").value = Char.Eig.Kon.Start; document.getElementById("KonErhAusg").value = Char.Eig.Kon.Erh;	document.getElementById("KonGesAusg").value = Char.Eig.Kon.Ges;	document.getElementById("KonKarKostAusg").value = Char.Eig.Kon.KarKost;
	document.getElementById("StrStartAusg").value = Char.Eig.Str.Start; document.getElementById("StrErhAusg").value = Char.Eig.Str.Erh;	document.getElementById("StrGesAusg").value = Char.Eig.Str.Ges;	document.getElementById("StrKarKostAusg").value = Char.Eig.Str.KarKost;
	document.getElementById("ReaStartAusg").value = Char.Eig.Rea.Start; document.getElementById("ReaErhAusg").value = Char.Eig.Rea.Erh;	document.getElementById("ReaGesAusg").value = Char.Eig.Rea.Ges;	document.getElementById("ReaKarKostAusg").value = Char.Eig.Rea.KarKost;
	document.getElementById("GekStartAusg").value = Char.Eig.Gek.Start; document.getElementById("GekErhAusg").value = Char.Eig.Gek.Erh;	document.getElementById("GekGesAusg").value = Char.Eig.Gek.Ges;	document.getElementById("GekKarKostAusg").value = Char.Eig.Gek.KarKost;
	document.getElementById("WilStartAusg").value = Char.Eig.Wil.Start; document.getElementById("WilErhAusg").value = Char.Eig.Wil.Erh;	document.getElementById("WilGesAusg").value = Char.Eig.Wil.Ges;	document.getElementById("WilKarKostAusg").value = Char.Eig.Wil.KarKost;
	document.getElementById("IntStartAusg").value = Char.Eig.Int.Start; document.getElementById("IntErhAusg").value = Char.Eig.Int.Erh;	document.getElementById("IntGesAusg").value = Char.Eig.Int.Ges;	document.getElementById("IntKarKostAusg").value = Char.Eig.Int.KarKost;
	document.getElementById("LogStartAusg").value = Char.Eig.Log.Start; document.getElementById("LogErhAusg").value = Char.Eig.Log.Erh;	document.getElementById("LogGesAusg").value = Char.Eig.Log.Ges;	document.getElementById("LogKarKostAusg").value = Char.Eig.Log.KarKost;
	document.getElementById("ChaStartAusg").value = Char.Eig.Cha.Start; document.getElementById("ChaErhAusg").value = Char.Eig.Cha.Erh;	document.getElementById("ChaGesAusg").value = Char.Eig.Cha.Ges;	document.getElementById("ChaKarKostAusg").value = Char.Eig.Cha.KarKost;
	//Eigenschaftspool 
	/*document.getElementsByClassName("KonPool").value = Char.Eig.Kon.Ges + "[Kon]";
	document.getElementsByClassName("StrPool").value = Char.Eig.Str.Ges + "[Str]";
	document.getElementsByClassName("ReaPool").value = Char.Eig.Rea.Ges + "[Rea]";
	document.getElementsByClassName("GekPool").value = Char.Eig.Gek.Ges + "[Gek]";
	document.getElementsByClassName("WilPool").value = Char.Eig.Wil.Ges + "[Wil]";
	document.getElementsByClassName("IntPool").value = "/" + Char.Eig.Int.Ges + "[Int]";
	document.getElementsByClassName("LogPool").value = Char.Eig.Log.Ges + "[Log]";
	document.getElementsByClassName("ChaPool").value = Char.Eig.Cha.Ges + "[Cha]";
	*/
	//Fähigkeiten
		//Astral
	document.getElementById("FahAstWertAusg").value = Char.Fah.Ast.Wert + Char.Fah.Ast.Erh;
	document.getElementById("FahAstSonderF").value = Char.Fah.Ast.SFert;
	document.getElementById("FahAstGesAusg").value = Char.Fah.Ast.Ges;
	document.getElementById("FahAstKarKostAusg").value = Char.Fah.Ast.KarKost;
	//Athletik
	document.getElementById("FahAthWertAusg").value = Char.Fah.Ath.Wert + Char.Fah.Ath.Erh;
	document.getElementById("FahAthSonderF").value = Char.Fah.Ath.SFert;
	document.getElementById("FahAthGesAusg").value = Char.Fah.Ath.Ges;
	document.getElementById("FahAthKarKostAusg").value = Char.Fah.Ath.KarKost;
	//Beschwören
	document.getElementById("FahBesWertAusg").value = Char.Fah.Bes.Wert + Char.Fah.Bes.Erh;
	document.getElementById("FahBesSonderF").value = Char.Fah.Bes.SFert;
	document.getElementById("FahBesGesAusg").value = Char.Fah.Bes.Ges;
	document.getElementById("FahBesKarKostAusg").value = Char.Fah.Bes.KarKost;
	//Biotech
	document.getElementById("FahBioWertAusg").value = Char.Fah.Bio.Wert + Char.Fah.Bio.Erh;
	document.getElementById("FahBioSonderF").value = Char.Fah.Bio.SFert;
	document.getElementById("FahBioGesAusg").value = Char.Fah.Bio.Ges;
	document.getElementById("FahBioKarKostAusg").value = Char.Fah.Bio.KarKost;
	//Cracken
	document.getElementById("FahCraWertAusg").value = Char.Fah.Cra.Wert + Char.Fah.Cra.Erh;
	document.getElementById("FahCraSonderF").value = Char.Fah.Cra.SFert;
	document.getElementById("FahCraGesAusg").value = Char.Fah.Cra.Ges;
	document.getElementById("FahCraKarKostAusg").value = Char.Fah.Cra.KarKost;
	//Einfluss
	document.getElementById("FahEinWertAusg").value = Char.Fah.Ein.Wert + Char.Fah.Ein.Erh;
	document.getElementById("FahEinSonderF").value = Char.Fah.Ein.SFert;
	document.getElementById("FahEinGesAusg").value = Char.Fah.Ein.Ges;
	document.getElementById("FahEinKarKostAusg").value = Char.Fah.Ein.KarKost;
	//Elektronik
	document.getElementById("FahEleWertAusg").value = Char.Fah.Ele.Wert + Char.Fah.Ele.Erh;
	document.getElementById("FahEleSonderF").value = Char.Fah.Ele.SFert;
	document.getElementById("FahEleGesAusg").value = Char.Fah.Ele.Ges;
	document.getElementById("FahEleKarKostAusg").value = Char.Fah.Ele.KarKost;
	//Exotische Waffen
	document.getElementById("FahExoWertAusg").value = Char.Fah.Exo.Wert + Char.Fah.Exo.Erh;
	document.getElementById("FahExoSonderF").value = Char.Fah.Exo.SFert;
	document.getElementById("FahExoGesAusg").value = Char.Fah.Exo.Ges;
	document.getElementById("FahExoKarKostAusg").value = Char.Fah.Exo.KarKost;
	//Feuerwaffen
	document.getElementById("FahFeuWertAusg").value = Char.Fah.Feu.Wert + Char.Fah.Feu.Erh;
	document.getElementById("FahFeuSonderF").value = Char.Fah.Feu.SFert;
	document.getElementById("FahFeuGesAusg").value = Char.Fah.Feu.Ges;
	document.getElementById("FahFeuKarKostAusg").value = Char.Fah.Feu.KarKost;
	//Heimlichkeit
	document.getElementById("FahHeiWertAusg").value = Char.Fah.Hei.Wert + Char.Fah.Hei.Erh;
	document.getElementById("FahHeiSonderF").value = Char.Fah.Hei.SFert;
	document.getElementById("FahHeiGesAusg").value = Char.Fah.Hei.Ges;
	document.getElementById("FahHeiKarKostAusg").value = Char.Fah.Hei.KarKost;
	//Hexerei
	document.getElementById("FahHexWertAusg").value = Char.Fah.Hex.Wert + Char.Fah.Hex.Erh;
	document.getElementById("FahHexSonderF").value = Char.Fah.Hex.SFert;
	document.getElementById("FahHexGesAusg").value = Char.Fah.Hex.Ges;
	document.getElementById("FahHexKarKostAusg").value = Char.Fah.Hex.KarKost;
	//Mechanik
	document.getElementById("FahMecWertAusg").value = Char.Fah.Mec.Wert + Char.Fah.Mec.Erh;
	document.getElementById("FahMecSonderF").value = Char.Fah.Mec.SFert;
	document.getElementById("FahMecGesAusg").value = Char.Fah.Mec.Ges;
	document.getElementById("FahMecKarKostAusg").value = Char.Fah.Mec.KarKost;
	//Nahkampf
	document.getElementById("FahNahWertAusg").value = Char.Fah.Nah.Wert + Char.Fah.Nah.Erh;
	document.getElementById("FahNahSonderF").value = Char.Fah.Nah.SFert;
	document.getElementById("FahNahGesAusg").value = Char.Fah.Nah.Ges;
	document.getElementById("FahNahKarKostAusg").value = Char.Fah.Nah.KarKost;
	//Natur
	document.getElementById("FahNatWertAusg").value = Char.Fah.Nat.Wert + Char.Fah.Nat.Erh;
	document.getElementById("FahNatSonderF").value = Char.Fah.Nat.SFert;
	document.getElementById("FahNatGesAusg").value = Char.Fah.Nat.Ges;
	document.getElementById("FahNatKarKostAusg").value = Char.Fah.Nat.KarKost;
	//Steuern
	document.getElementById("FahSteWertAusg").value = Char.Fah.Ste.Wert + Char.Fah.Ste.Erh;
	document.getElementById("FahSteSonderF").value = Char.Fah.Ste.SFert;
	document.getElementById("FahSteGesAusg").value = Char.Fah.Ste.Ges;
	document.getElementById("FahSteKarKostAusg").value = Char.Fah.Ste.KarKost;
	//Tasken
	document.getElementById("FahTasWertAusg").value = Char.Fah.Tas.Wert + Char.Fah.Tas.Erh;
	document.getElementById("FahTasSonderF").value = Char.Fah.Tas.SFert;
	document.getElementById("FahTasGesAusg").value = Char.Fah.Tas.Ges;
	document.getElementById("FahTasKarKostAusg").value = Char.Fah.Tas.KarKost;
	//Überreden
	document.getElementById("FahUbeWertAusg").value = Char.Fah.Ube.Wert + Char.Fah.Ube.Erh;
	document.getElementById("FahUbeSonderF").value = Char.Fah.Ube.SFert;
	document.getElementById("FahUbeGesAusg").value = Char.Fah.Ube.Ges;
	document.getElementById("FahUbeKarKostAusg").value = Char.Fah.Ube.KarKost;
	//Verzaubern
	document.getElementById("FahVerWertAusg").value = Char.Fah.Ver.Wert + Char.Fah.Ver.Erh;
	document.getElementById("FahVerSonderF").value = Char.Fah.Ver.SFert;
	document.getElementById("FahVerGesAusg").value = Char.Fah.Ver.Ges;
	document.getElementById("FahVerKarKostAusg").value = Char.Fah.Ver.KarKost;
	//Wahrnehmung
	document.getElementById("FahWahWertAusg").value = Char.Fah.Wah.Wert + Char.Fah.Wah.Erh;
	document.getElementById("FahWahSonderF").value = Char.Fah.Wah.SFert;
	document.getElementById("FahWahGesAusg").value = Char.Fah.Wah.Ges;
	document.getElementById("FahWahKarKostAusg").value = Char.Fah.Wah.KarKost;	
}


//Onload
window.onload = function () {Ausgabe (); StartKarma (), ChangeKarma (); ChangeMeta (); EigWCheck (); EigGesBer(); EigKostBer(); GesKarmaBer ();
		FahWerte(); SpezHinz ();
	};
//Alte Werte
