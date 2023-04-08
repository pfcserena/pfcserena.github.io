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
  
  
  const analisisAereoTrueSynt = [
    ['Vehiculos_Aereos_soundscape_unimodal116', 0.000013, 0.999959, 'Se escucha acercándose un avión, y el modelo lo clasifica bien. Está presente en prácticamente todo el fragmento.'], 
    ['Vehiculos_Aereos_soundscape_unimodal570', 0.613815, 0.88884, 'Es claro que hay una fuente, que bien podría ser un motor o un avión. Parece ser inespecífico, y el modelo lo clasifica como ambas clases. La etiqueta original es aéreo, pero es ambiguo.'], 
    ['Vehiculos_Aereos_soundscape_unimodal123', 0.917612, 0.017494, 'El avión se escucha en la primera mitad del audio y luego no hay fuente. Su sonido es similar a los audios de motores de esta misma base. Se clasifica como motor.'], 
    ['Vehiculos_Aereos_soundscape_unimodal37', 0.261592, 0.496274, 'En este audio se escucha claramente un avión, pero la confianza en la clasificación no supera el umbral, por lo que no se logra clasificar correctamente. El modelo falla en otorgar una confianza menor al umbral para esta fuente.'],
  ];

  const analisisMotoresTrueSynt = [
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal38', 0.998917, 0.003778, 'Fuente en primer plano, durante todo el fragmento, bien clasificado como motor.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal300', 0.999779, 0.000599, 'Es evidente que hay un motor en primer plano, y está correctamente clasificado como tal.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal102', 0.145242, 0.0798, 'Se escucha un sonido que podría deberse a saturación por viento o a una fuente, pero resulta tan evidente que sea un motor. Se asigna una confianza mayor a cero a esta clase pero no llega al umbral de decisión, por tanto se clasifica como fondo.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal107', 0.095523, 0.885046, 'Se nota claramente que hay un motor. Se clasifica como aéreo.'],
  ];
 
  const analisisBackTrueSynt = [
    ['Only_Background_soundscape_unimodal120', 0.001555, 0.000097, 'Si bien se escucha viento, no se encuentra saturado. Correctamente clasificado como fondo.'], 
    ['Only_Background_soundscape_unimodal238', 0.791876, 0.000635, 'Este audio corresponde a fondo, si bien se escucha sobre el final una fuente no especificada. El modelo lo clasifica como motor, pero bien podría tratarse de un conjunto de vocalizaciones de animales.'], 
  ];

  const analisisAereosTrueReal = [
    ['Frei_20211206_180000_avion2', 0.001285, 0.99321, 'Fragmento con presencia de vehículos aéreos en primer plano el cual el sistema logra identificar correctamente.'], 
    ['Frei_20220125_200000_helicoptero4', 0.002231, 0.993604, 'Nuevamente se escucha la fuente en primer plano y el modelo clasifica correctamente con alta confianza.'], 
    ['ArdPF_20211216_090000_avion2', 0.006574, 0.941115, 'Fragmento con presencia de fuente en segundo plano, aún así el modelo logra clasificarlo correctamente.'], 
    ['Frei_20211206_180000_avion4', 0.010079, 0.960842, 'Se escucha nuevamente un vehículo aéreo en segundo plano, y el modelo lo identifica correctamente.'], 
    ['Frei_20220125_200000_helicoptero6', 0.069222, 0.3014, 'Se escucha un helicóptero en segundo plano. Si bien el modelo tiene un score no despreciable en la predicción de aéreo no logra identificar con la suficiente confianza la presencia de la fuente. '], 
  ];

  const analisisMotorTrueReal = [
    ['motor1_escabadora', 0.994901, 0.00071, 'Fragmento con presencia de motor en primer plano detectado correctamente por el modelo.'], 
    ['motor1_camion', 0.99472, 0.012393, 'Nuevamente, se escucha un motor en primer plano el cual es detectado con alta probabilidad por el modelo.'], 
    ['BCAA1_20211230_140000_motor3', 0.904592, 0.441864, 'Se evidencia la presencia de un motor en primer plano detectado correctamente con alta probabilidad.'],
    ['BCAA1_20220218_130000_motor3', 0.522382, 0.217309, 'Este audio se encuentra etiquetado con la presencia de un vehículo terrestre pasando, que al escucharlo se encuentra en segundo plano. Si bien el score no es demasiado alto, logra identificarlo correctamente.'], 
    ['lancha2', 0.011228, 0.997381, 'En esta situación hay presencia de una lancha en donde el motor se encuentra en segundo plano. El modelo identifica erróneamente la presencia de un vehículo aéreo.'], 
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

  generateAnalisisTable('analisis-table-real', 'files/sintetica_analisis/aereo_true/' ,realAudiosBackground, 1);  
  
