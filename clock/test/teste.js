/*
* Very simple tests values
*/
const Angle = require('../models/clock.calcangle');

let a = new Angle();

	a.calc_angle(9 ,15);
	a.calc_angle(9 ,16);
	a.calc_angle(9 ,19);
	a.calc_angle(10,20);
	a.calc_Angle(1 ,12);
	a.calc_angle(12,0);
	a.calc_angle(12,37);
	a.calc_angle(7 ,15);
	a.calc_angle(12,30);
	a.calc_angle(17,40);
	a.calc_angle(18,0);
	a.calc_angle(3 ,0);
	a.calc_angle(6 ,0);
	a.calc_angle(11 ,5);
	a.calc_angle(30,0);				//invalid
	a.calc_angle(10,70);			//invalid
	a.calc_angle(24,30);			//invalid
	a.calc_angle(-1,30);			//invalid
	a.calc_angle(0,30);				//invalid
	a.calc_angle(12.5,11.8);	//converts
