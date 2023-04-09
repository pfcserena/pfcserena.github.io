function createAudioHTML(path) {
    return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }

function createTextHTML(text) {
    return '<p>' + text + '</p>';
  }
  const numPerPage = 4;
  
  function generateContinuationTable(tableId, filenames, page) {
    let table = document.getElementById(tableId);
  
    let nrRows = table.rows.length;
    for (let i = 1; i < nrRows; i++) {
      table.deleteRow(1);
    }
    let prefix = 'audio_samples/speech/';
    for (let i = (page - 1) * numPerPage; i < page * numPerPage; i++) {
      let row = table.insertRow(i % numPerPage + 1);
      let cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_original.wav');
  
      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_prompt.wav');
  
      cell = row.insertCell(2);
      content = '';
      for (let j = 0; j < 4; j++) {
        content += createAudioHTML(
            prefix + filenames[i] + '_continuation_12rvq_' + j + '.wav');
      }
      cell.innerHTML = content;
    }
  }
  
  function generateAcousticGenerationTable(tableId, filenames, page) {
    let table = document.getElementById(tableId);
    let nrRows = table.rows.length;
    for (let i = 1; i < nrRows; i++) {
      table.deleteRow(1);
    }
    let prefix = 'audio_samples/speech/';
    for (let i = (page - 1) * numPerPage; i < page * numPerPage; i++) {
      let row = table.insertRow(i % numPerPage + 1);
      let cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_original.wav');
  
      cell = row.insertCell(1);
      content = '';
      for (let j = 0; j < 3; j++) {
        content += createAudioHTML(
            prefix + filenames[i] + '_generation_mlm_12rvq_' + j + '.wav');
      }
      cell.innerHTML = content;
    }
  }
  
  function generateSoundStreamTable(tableId, filenames, page) {
    let table = document.getElementById(tableId);
    let nrRows = table.rows.length;
    for (let i = 1; i < nrRows; i++) {
      table.deleteRow(1);
    }
    let prefix = 'audio_samples/speech/';
    for (let i = (page - 1) * numPerPage; i < page * numPerPage; i++) {
      let row = table.insertRow(i % numPerPage + 1);
      let cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_original.wav');
  
      cell = row.insertCell(1);
      cell.innerHTML =
          createAudioHTML(prefix + filenames[i] + '_reconstruction_3rvq.wav');
  
      cell = row.insertCell(2);
      cell.innerHTML =
          createAudioHTML(prefix + filenames[i] + '_reconstruction_12rvq.wav');
    }
  }
  
  function generateSimpleTable(tableId, filenames, prefix) {
    let table = document.getElementById(tableId);
  
    let content = '';
    for (let i = 0; i < filenames.length; i++) {
      content += createAudioHTML(prefix + filenames[i] + '.wav');
    }
  
    let row = table.insertRow(1);
    let cell = row.insertCell(0);
    cell.innerHTML = content;
  }
  
  function generatePianoTable(tableId, filenames) {
    let table = document.getElementById(tableId);
    let prefix = 'audio_samples/piano/';
    for (let i = 0; i < filenames.length; i++) {
      let row = table.insertRow(i + 1);
      let cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_original.wav');
  
      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_prompt.wav');
  
      cell = row.insertCell(2);
      cell.innerHTML =
          createAudioHTML(prefix + filenames[i] + '_cont_acoustic_only.wav');
  
      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_cont.wav');
    }
  }

  function generateAnalisisTable(tableId, prefix , filenames) {
    let table = document.getElementById(tableId);
    for (let i = 0; i < filenames.length; i++) {
      let row = table.insertRow(i + 1);
      let cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML(prefix + filenames[i][0] + '.wav');
      cell = row.insertCell(1);
      cell.innerHTML = createTextHTML(filenames[i][1]);

      cell = row.insertCell(2);
      cell.innerHTML = createTextHTML(filenames[i][2]);

      cell = row.insertCell(3);
      cell.innerHTML = createTextHTML(filenames[i][3]);
  
    }
  }
  
 
  const syntetictAudiosBackground = [
    'Only_Background_soundscape_unimodal16',
    'Only_Background_soundscape_unimodal239',
    'Only_Background_soundscape_unimodal751',
    'Only_Background_soundscape_unimodal1093',
    'Only_Background_soundscape_unimodal1113',
    'Only_Background_soundscape_unimodal1143',
  ];

  const syntetictAudiosAereos = [
    'Vehículos_Aereos_soundscape_unimodal1',
    'Vehículos_Aereos_soundscape_unimodal60',
    'Vehículos_Aereos_soundscape_unimodal69',
    'Vehículos_Aereos_soundscape_unimodal93',
    'Vehículos_Aereos_soundscape_unimodal257',
    'Vehículos_Aereos_soundscape_unimodal839',
  ];

  const syntetictAudiosTerrestres = [
    'Vehiculos_acuaticos_y_terrestres_soundscape_unimodal40',
    'Vehiculos_acuaticos_y_terrestres_soundscape_unimodal44',
    'Vehiculos_acuaticos_y_terrestres_soundscape_unimodal113',
    'Vehiculos_acuaticos_y_terrestres_soundscape_unimodal198',
    'Vehiculos_acuaticos_y_terrestres_soundscape_unimodal417',
    'Vehiculos_acuaticos_y_terrestres_soundscape_unimodal601',
  ];


  const realAudiosBackground = [
    'ArdPF_20220112_010000_bg3',
    'ArdPF_20220112_010000_bg4',
    'Drake_20220105_190000_bg1',
    'Drake_20220105_190000_bg2',
    'Drake_20220108_200000_bg5',
    'Drake_20220108_200000_bg6',
  ];

  const realAudiosMotor = [
    'BCAA1_20211207_190000_motor3',
    'BCAA1_20211207_190000_motor11',
    'BCAA1_20211230_140000_motor3',
    'BCAA1_20220218_130000_motor1',
    'Frei_20211206_180000_motor2',
    'Frei_20220125_000000_motor2',
  ];

  const realAudiosAereo = [
    'Frei_20211206_180000_avion2',
    'ArdPF_20211216_090000_avion2',
    'Frei_20211206_180000_avion4',
    'Frei_20220125_150000_avion3',
    'Frei_20220125_200000_helicoptero1',
    'Frei_20220125_200000_helicoptero3',
  ];
  
  
  /* Analisis Base Sintetica */

  const analisisAereoTrueSynt = [
    ['Vehiculos_Aereos_soundscape_unimodal116', 0.000013, 0.999959, 'Este fragmento presenta un avión en primer plano. Se observa que modelo lo identifica correctamente ya que asigna un score elevado a la presencia de vehículos aéreos y un score aproximadamente nulo a vehículos terrestres y acuáticos.'], 
    ['Vehiculos_Aereos_soundscape_unimodal570', 0.613815, 0.88884, 'En este fragmento la fuente se encuentra en segundo plano. Si bien la etiqueta real es aérea, se observa que al escuchar el audio no es sencillo identificar la fuente. El modelo asigna un score no despreciable en ambas clases pero le asigna más probabilidad a la clase correcta.'], 
    ['Vehiculos_Aereos_soundscape_unimodal123', 0.917612, 0.017494, 'En este caso la fuente aparece brevemente en el fragmento. El modelo asigna score alto a la clase motor por lo que reconoce en forma incorrecta la fuente.'], 
    ['Vehiculos_Aereos_soundscape_unimodal37', 0.261592, 0.496274, 'En este caso la fuente se encuentra en todo el audio pero el modelo no asigna score alto en la clase de vehículo aéreo. Se destaca que en este caso el avión aparenta estar despegando, lo cual podría estar vinculado con los resultados obtenidos ya que en esta circunstancia el sonido del mismo es diferente al que realiza cuando está en marcha.'],
  ];

  const analisisMotoresTrueSynt = [
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal38', 0.998917, 0.003778, 'En este caso la fuente se encuentra en primer plano durante todo el fragmento y la misma es identificada con un alto nivel de confianza por el modelo.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal300', 0.999779, 0.000599, 'Resulta evidente la presencia de un motor en primer plano el cual es identificada en forma acertada por el modelo ya que asigna un score elevado a dicha fuente y un score casi nulo a la presencia de vehículos aéreos.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal102', 0.145242, 0.0798, 'La fuente se encuentra en segundo plano y el score obtenido para la clase correcta es muy bajo. Sin embargo, se observa que el score obtenido para la clase incorrecta es aún más bajo que el obtenido para la clase correcta.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal107', 0.095523, 0.885046, 'En este caso la fuente se encuentra presente por poco más que la mitad del fragmento pero el modelo detecta con mayor confianza la presencia de un vehículo aéreo.'],
  ];
 
  const analisisBackTrueSynt = [
    ['Only_Background_soundscape_unimodal120', 0.001555, 0.000097, 'La ausencia de fuentes es identificada correctamente por el modelo que asigna scores bajos a ambas clases.'], 
    ['Only_Background_soundscape_unimodal238', 0.791876, 0.000635, 'En este caso, si bien el audio es de fondo, el sistema asigna una probabilidad elevada a la presencia de vehículo terrestre. Se entiende que si bien el modelo identifica incorrectamente el viento del audio puede prestarse a confusión al ser escuchado.'], 
  ];

  /* Analisis Base Real */

  const analisisAereosTrueReal = [
    ['Frei_20211206_180000_avion2', 0.001285, 0.99321, 'Se escucha el vehículo aéreo en primer plano y el sistema logra identificarlo correctamente puesto que asigna un score aproximadamente 1 a esa clase.'], 
    ['Frei_20220125_200000_helicoptero4', 0.002231, 0.993604, 'En este caso se cuenta con la fuente en primer plano y el modelo identifica la misma con confianza elevada.'], 
    ['ArdPF_20211216_090000_avion2', 0.006574, 0.941115, 'En este fragmento la fuente se encuentra en segundo plano y aún así el modelo logra identificarla correctamente con confianza elevada.'], 
    ['Frei_20211206_180000_avion4', 0.010079, 0.960842, 'En este audio se escucha un vehículo aéreo y los scores obtenidos demuestran que el modelo identifica la presencia de la fuente con confianza elevada.'], 
    ['Frei_20220125_200000_helicoptero6', 0.069222, 0.3014, 'En este audio se escucha un helicóptero y el score obtenido es mayor en la predicción de vehículos aéreos respecto a vehículos terrestres y acuáticos. Sin embargo, se destaca que el modelo no logra identificar con una confianza considerable la presencia de la fuente.'], 
  ];

  const analisisMotorTrueReal = [
    ['motor1_escabadora', 0.994901, 0.00071, 'En este fragmento se nota la presencia de un motor en primer plano, lo cual es correctamente identificado por el modelo que otorga un score elevado a la presencia de vehículos terrestres y acuáticos.'], 
    ['motor1_camion', 0.99472, 0.012393, 'En este audio se escucha un motor en primer plano, el cual es detectado con probabilidad cercana a 1 por el modelo.'], 
    ['BCAA1_20211230_140000_motor3', 0.904592, 0.441864, 'En este caso es evidente la presencia de un motor el cual es identificado correctamente por el modelo que asigna alta probabilidad a la clase vehículos terrestres y acuáticos.'],
    ['BCAA1_20220218_130000_motor3', 0.522382, 0.217309, 'Este fragmento, si bien es ruidoso, contiene un motor el cual es identificado con baja confianza por el modelo. Se destaca que además el score para vehículos aéreos no es despreciable en este caso.'], 
    ['lancha2', 0.011228, 0.997381, 'En este caso el sistema detecta con confianza elevada la presencia de un vehículo aéreo y con probabilidad cercana a 0 la presencia de vehículos acuáticos y terrestres. Se destaca que en este caso al escuchar el audio el mismo despierta dudas respecto a la fuente presente sobre todo al escuchar el final del audio donde podría tratarse de una avioneta despegando.'], 
  ];

  const analisisBackTrueReal = [
    ['Drake_20211229_110000_bg1', 0.004027 , 0.000692, 'En este caso no hay presencia de fuentes y esto es identificado correctamente por el sistema que asigna scores bajos para ambos tipos de fuentes.'], 
    ['PtaEu_20211231_180000_bg2', 0.005569, 0.022117, 'En este caso el fondo es particularmente ruidoso donde existe una gran presencia de viento, sin embargo el sistema detecta adecuadamente, asignando scores bajos a los dos tipos de fuentes.'], 
    ['ArdPF_20220108_200000_bg3', 0.002243, 0.999602  , 'En este caso el audio es ruidoso, existe una gran presencia de viento, y además se escucha un animal sobre el final del audio. Esto ocasiona que el sistema cometa un error y asigne un nivel de confianza alto a la presencia de vehículos aéreos.'], 
   ];

  /* Display Syntetic Audios */
  generateSimpleTable(
      'synteticAudios-table_motor', syntetictAudiosTerrestres,
      prefix = 'files/sintetica_demo/terrestresyacuaticos/');

  generateSimpleTable(
    'synteticAudios-table_back', syntetictAudiosBackground,
    prefix = 'files/sintetica_demo/backgrounds/');

  generateSimpleTable(
    'synteticAudios-table_aereos', syntetictAudiosAereos,
    prefix = 'files/sintetica_demo/aereos/');

  
  /* Display Real Audios */

  generateSimpleTable(
      'realAudios-table_back', realAudiosBackground,
      prefix = 'files/real_demo/backgrounds/');

  generateSimpleTable(
    'realAudios-table_aereo', realAudiosAereo,
    prefix = 'files/real_demo/aereos/');
      
  generateSimpleTable(
      'realAudios-table_motor', realAudiosMotor,
      prefix = 'files/real_demo/terrestresyacuaticos/');
  
  /*Analisis Base sintetica */ 
  generateAnalisisTable('analisis-table-synt-aereo', 'files/sintetica_analisis/aereo_true/' ,analisisAereoTrueSynt, 1);

  generateAnalisisTable('analisis-table-synt-motores', 'files/sintetica_analisis/motor_true/' , analisisMotoresTrueSynt, 1);

  generateAnalisisTable('analisis-table-synt-background', 'files/sintetica_analisis/back_true/' , analisisBackTrueSynt, 1);


  /*Analisis Base real */

  generateAnalisisTable('analisis-table-real-aereos', 'files/real_analisis/aereo_true/' , analisisAereosTrueReal, 1);

  generateAnalisisTable('analisis-table-real-motores', 'files/real_analisis/motor_true/' , analisisMotorTrueReal, 1);

  generateAnalisisTable('analisis-table-real-background', 'files/real_analisis/back_true/' ,analisisBackTrueReal, 1);  
  
