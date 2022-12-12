
function getGameData(runtime){

// 	var gameData = '{"email":"simone@unusualdope.com","player_number":"1","player_name":"Boris Radunović","player_shirt":"cag-away"}'

	runtime.globalVars.gameData = gameData


}


const scriptsInEvents = {

	async Globalvariable_Event1_Act1(runtime, localVars)
	{
		getGameData(runtime)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

