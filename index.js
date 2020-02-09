require('winax');

// get labview ActiveX server
lvapp = new ActiveXObject('Labview.Application');

// set VI file
viPath = "C:\\Sources\\myLabview\\Labview\\Arduino.vi";
//viPath = "C:\\Sources\\myLabview\\Labview\\Suma.vi";
//viPath = "C:\\Sources\\myLabview\\Labview\\Text.vi";

// Load the VI into memory
//vi = lvapp.GetVIReference(viPath, "", true, 0);
vi = lvapp.GetVIReference(viPath);

// Open front panel to set parameters
vi.FPWinOpen = 1;                    

// -------------------- Ejemplo Arduino.vi --------------------
vi.SetControlValue("Serial Port", "COM3");
vi.SetControlValue("Digital Output Channel", 13);
vi.SetControlValue("LED Value", 0);
vi.SetControlValue("Stop Button", 0);

//var paramNames = new Array("Serial Port", "Digital Output Channel", "LED Value", "Stop Button");
//var paramValues  = new Array("COM3", 13, 0, 0);

//vi.Call(paramNames, paramValues);
//vi.Call2(paramNames, paramValues, true, true, false, true);

// -------------------- Ejemplo Text.vi --------------------
// set VI parameters (You you do not need define Terminals)
/*vi.SetControlValue("Input 1", "Hello");
vi.SetControlValue("Input 2", " World");

// set VI parameters (You must define Terminals)
var paramNames = new Array("Input 1","Input 2");
var paramValues  = new Array("Hello"," World");
 
vi.Call(paramNames, paramValues);*/

// get VI parameters
//console.log(vi.GetControlValue("Result"));

// -------------------- Ejemplo Suma.vi --------------------
// set VI parameters
/*vi.SetControlValue("X", 2);
vi.SetControlValue("Y", 2);

// get VI parameters
//console.log(vi.GetControlValue("SUMA"));*/

// run the VI (asyncronous)
vi.Run(true);          

console.log("LLEGUE");

// close VI front panel
vi.CloseFrontPanel();

// close labview application
lvapp.Quit();