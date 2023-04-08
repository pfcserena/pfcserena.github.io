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
  
  const librispeechTestCleanContinuationFilenames = [
    '1f385851-dc66-4da8-ac1b-8f5173f68649',
    '72acf312-63e0-443c-ac05-abe1e74e8367',
    'f3ae9437-ab9b-4444-ad12-4ea2d29fc6f8',
    'ff338b2c-c140-4e3a-ba31-87d2093cf70c',
    'e7594c11-e34e-4db6-a853-6f0ddc356f08',
    '7e4cf66b-7da9-4261-954b-17004f4684e6',
    '103583eb-3eb9-488b-a591-3ffac262c810',
    '75389290-9ec1-45f9-b7f8-942637e5e644',
    '497b5be1-e5f7-49dd-b244-67df3817d25b',
    '81aff5f4-88b7-49b5-96d9-d5ec85ce64ea',
    'd3b1f250-2e55-4f6c-be0d-7d7fc9428464',
    '4093adea-d36c-42b8-a165-14cc5fceb461',
    'e41a4d2f-d790-483e-8b80-10525e180675',
    '76da8572-9381-4b8e-bf33-14b82ac32de8',
    '75adcb3a-7e6f-47b6-aa7b-c528fcfb7fe8',
    '3242966b-4c6a-49a2-8687-efd36546c8ba',
    '2eb8ed00-8994-49f5-aa86-5b0450283dd6',
    '23f51675-43da-4bc4-8f31-db866152b080',
    'bb632b5f-6c31-4966-a24d-dc112ba79873',
    'e3223207-381f-45de-bf30-63cee54316f2',
  ];
  

  const syntetictAudios = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

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
  
  
  const analisisAereoTrue = [
    ['Vehiculos_Aereos_soundscape_unimodal116', 0.000013, 0.999959, 'Se escucha acercándose un avión, y el modelo lo clasifica bien. Está presente en prácticamente todo el fragmento.'], 
    ['Vehiculos_Aereos_soundscape_unimodal570', 0.613815, 0.88884, 'Es claro que hay una fuente, que bien podría ser un motor o un avión. Parece ser inespecífico, y el modelo lo clasifica como ambas clases. La etiqueta original es aéreo, pero es ambiguo.'], 
    ['Vehiculos_Aereos_soundscape_unimodal123', 0.917612, 0.017494, 'El avión se escucha en la primera mitad del audio y luego no hay fuente. Su sonido es similar a los audios de motores de esta misma base. Se clasifica como motor.'], 
    ['Vehiculos_Aereos_soundscape_unimodal37', 0.261592, 0.496274, 'En este audio se escucha claramente un avión, pero la confianza en la clasificación no supera el umbral, por lo que no se logra clasificar correctamente. El modelo falla en otorgar una confianza menor al umbral para esta fuente.'],
  ];

  const analisisMotoresTrue = [
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal38', 0.998917, 0.003778, 'Fuente en primer plano, durante todo el fragmento, bien clasificado como motor.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal300', 0.999779, 0.000599, 'Es evidente que hay un motor en primer plano, y está correctamente clasificado como tal.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal102', 0.145242, 0.0798, 'Se escucha un sonido que podría deberse a saturación por viento o a una fuente, pero resulta tan evidente que sea un motor. Se asigna una confianza mayor a cero a esta clase pero no llega al umbral de decisión, por tanto se clasifica como fondo.'], 
    ['Vehiculos_acuaticos_y_terrestres_soundscape_unimodal107', 0.095523, 0.885046, 'Se nota claramente que hay un motor. Se clasifica como aéreo.'],
  ];
 
  const analisisBackTrue = [
    ['Only_Background_soundscape_unimodal120', 0.001555, 0.000097, 'Si bien se escucha viento, no se encuentra saturado. Correctamente clasificado como fondo.'], 
    ['Only_Background_soundscape_unimodal238', 0.791876, 0.000635, 'Este audio corresponde a fondo, si bien se escucha sobre el final una fuente no especificada. El modelo lo clasifica como motor, pero bien podría tratarse de un conjunto de vocalizaciones de animales.'], 
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
  generateAnalisisTable('analisis-table-synt-aereo', 'files/sintetica_analisis/aereo_true/' ,analisisAereoTrue, 1);

  generateAnalisisTable('analisis-table-synt-motores', 'files/sintetica_analisis/motor_true/' , analisisMotoresTrue, 1);

  generateAnalisisTable('analisis-table-synt-background', 'files/sintetica_analisis/back_true/' , analisisBackTrue, 1);


  /*Analisis Base real */

  generateAnalisisTable('analisis-table-real', 'files/sintetica_analisis/aereo_true/' ,realAudiosBackground, 1);
  
