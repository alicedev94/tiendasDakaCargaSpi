const sequelize = require("../lib/sequelize");
const { Sequelize } = require("sequelize");
//Ultimo id + 1
const querySql = async () => {
  const [data] = await sequelize.query(`SELECT * FROM name_eo_persona`);
  return data;
};

const query2Sql = async (body) => {
  const rta = await sequelize.query(`BEGIN
  INSERT INTO 
    "INFOCENT"."NAME_EO_PERSONA" 
      (ID, 
        NOMBRE1, 
        NOMBRE2, 
        APELLIDO1, 
        APELLIDO2, 
        ID_TIPO_IDEN, 
        NACIONAL,
        NUM_IDEN, 
        FECHA_NA, 
        ID_ENTFE_NA, 
        ID_PAIS_NA, 
        SEXO, 
        EDO_CIVIL, 
        ZURDO, 
        DIRECCION, 
        ID_ENTFE, 
        ID_PAIS, 
        TELEFONO1, 
        CELULAR, 
        E_MAIL1, 
        USRCRE, 
        FECCRE, 
        USRACT, 
        FECACT, 
        ENFERMEDADOCU, 
        ETNIAINDIGENA, 
        DISCAUDITIVA, 
        DISCVISUAL, 
        DISCINTELECTUAL, 
        DISCMENTAL, 
        DISCMUSCULOESQ, 
        DISCACCIDENTE, 
        DISCOTRA,
        U_VERIFY
        ) 
    VALUES ((SELECT MAX(ID + 2) FROM eo_persona), 'JANY', 'GABRIELA', 'PEREIRA', 'GIEMENZ', '1', 'Venezolana', '30039419', 
      TO_DATE('26/09/02', 'DD/MM/RR'), 'CB', 'VEN', '2', 'S', '0', 'SAN DIEGO', 'CB', 'VEN', '4144068829', '4144068829', 'JANYP26@GMAIL.COM', 'INFOCENT', 
      TO_DATE('03/05/23', 'DD/MM/RR'), 'INFOCENT', TO_DATE('03/05/23', 'DD/MM/RR'), '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
  COMMIT;
END;`);
  return rta;
};

const nameNewLog2 = async (body) => {
  const rta = await sequelize.query(`
  BEGIN
    INSERT INTO 
      "INFOCENT"."NAME_EO_PERSONA" 
        (ID, 
          NOMBRE1, 
          NOMBRE2, 
          APELLIDO1, 
          APELLIDO2, 
          ID_TIPO_IDEN, 
          NACIONAL,
          NUM_IDEN, 
          FECHA_NA, 
          ID_ENTFE_NA, 
          ID_PAIS_NA, 
          SEXO, 
          EDO_CIVIL, 
          ZURDO, 
          DIRECCION, 
          ID_ENTFE, 
          ID_PAIS, 
          TELEFONO1, 
          CELULAR, 
          E_MAIL1, 
          USRCRE, 
          FECCRE, 
          USRACT, 
          FECACT, 
          ENFERMEDADOCU, 
          ETNIAINDIGENA, 
          DISCAUDITIVA, 
          DISCVISUAL, 
          DISCINTELECTUAL, 
          DISCMENTAL, 
          DISCMUSCULOESQ, 
          DISCACCIDENTE, 
          DISCOTRA
          ) 
        VALUES ((SELECT MAX(id_pais + 1) FROM NAME_PAISES), '${body.nombreUno}', '${body.segundoNombre}', '${body.apellidoUno}', '${body.apellidoDos}', '${body.idTipoIdentificacion}', '${body.nacionalidad}', '${body.numeroIdentificacion}', 
        TO_DATE('03/05/23', 'DD/MM/RR'), 'DD', 'DD', '${body.sexo}', '${body.edoCivil}', '${body.manoDominante}', '${body.direccion}', 'DDDD', 'DDDD', '${body.telefono1}', '${body.celular}', '${body.emailUno}', 'CLIENTE', 
        TO_DATE('03/05/23', 'DD/MM/RR'), 'CLIENTE', TO_DATE('03/05/23', 'DD/MM/RR'), '0', '0', '0', '0', '0', '0', '0', '0', '0');
    COMMIT;
  END;`);
  console.log(body.fechaNacimiento);
  return rta;
};

const nameGetCountry = async () => {
  const rta = await sequelize.query(`SELECT nombre_pais FROM NAME_PAISES`);
  return rta;
};

module.exports = {
  querySql,
  query2Sql,
  nameNewLog2,
  nameGetCountry,
};
