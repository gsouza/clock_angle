/**
 * Problem facing comprehension
 * 		https://www.youtube.com/watch?v=ySaX6VZqQlk
 * 		https://www.youtube.com/watch?v=7quiJzP7Hd4
 *		https://www.youtube.com/watch?v=PpxfLHzzRVc
 * 
 * Formule: 	 θ = abs(β + xp - α) % 360
 * 				  .<-| 	 |   |    |   |-> minute pointer angle
 * 				 / \		 |	 |		|-----> diference proportional of o'time based on minutes quantity
 * 				/   \ 	 |	 |----------> hour pointer angle
 * 			α/     β   |------------------> result with diference of the angles between the clock pointers
 * *****************************************************************/
const N_TOT_HOURS		= 12;
const N_TOT_MINUTS	= 60;
const G_TOT_CIRCLE	= 360;
const GRAUS_P_HOUR 	= G_TOT_CIRCLE/N_TOT_HOURS;			//30
const GRAUS_P_MINUT = G_TOT_CIRCLE/N_TOT_MINUTS;		//6
// const MINUTES_P_STEP= N_TOT_MINUTS/N_TOT_HOURS;	//5

const LIMIT_MIN_INF	= 0;
const LIMIT_HR_INF	= 0;
const LIMIT_HR_SUP	= 24;

class Angle {
	
	help() {
		console.log("help :: Insert hour and minute values to get the angle between two pointers.");
	}
	
	check_boundaries = () => {
		if (this.hr >= LIMIT_HR_SUP || this.hr <= LIMIT_HR_INF ||  this.min < LIMIT_MIN_INF || this.min >= N_TOT_MINUTS) {
			console.error("clock_validate :: ERR : invalid data input: ", this.hr, this.min);
			return false;
		}
		return true;
	}	;

	clock_format = () => {
		if (this.hr > N_TOT_HOURS) {
			this.hr = this.hr - N_TOT_HOURS;
		}
	};

	get_h_proportional = () => {
		return ((this.min/N_TOT_MINUTS)*GRAUS_P_HOUR);
	}

	get_h_angle = () => {
		return (Math.floor(this.hr * GRAUS_P_HOUR + this.get_h_proportional())) % G_TOT_CIRCLE;
	}

	get_m_angle = () => {
		return (this.min * GRAUS_P_MINUT);
	}

	calc_angle = (hr, min) => {

		this.hr 	= Math.floor(hr);
		this.min 	= Math.floor(min);
	
		if(!this.check_boundaries())
			return {status: false, err:'wrong input'};

		this.clock_format();
		
		let b = Math.abs(this.get_h_angle()-this.get_m_angle());

		console.log("calc_angle :: [%s:%s] \t: %d° ", this.hr, this.min, b);
		
		return {status: true, angle: b};
	};

	calc_Angle = (hr, min) => {

		let a = this.calc_angle(hr, min); 
		
		if (a.status) {
			let b = G_TOT_CIRCLE - a.angle;			
			console.log("calc_Angle :: [%s:%s] \t: %s° ", this.hr, this.min, b);			
			
			return {status: true, angle: b};
		}

		return a;
	};

	get_angle(hr, min) {
		return this.calc_angle(hr, min);
	}
};

module.exports = Angle;
