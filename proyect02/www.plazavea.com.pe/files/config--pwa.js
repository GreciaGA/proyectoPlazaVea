
var CONFIG = (function () {

    // Mostrar el free shipping en vitrinas1
    var SHOW_FREE_SHIPPING = false;
  
    // Guarda los nombres que asignamos a cada sitio
    var FOOD_SITE_NAME = 'food';
    var NON_FOOD_SITE_NAME = 'non-food';
  
    var FOOD_SITE_URL = '/supermercado';
    var NONFOOD_SITE_URL = '/electrohogar';
    var APP_KEY_GEODIR = '4ae91d99-f67b-48ce-b1c5-20781fa56296';
  
    //Permite simulacion en ficha para activar botones de modal de despacho y recojo
    var WHITELABEL_SIMULATE_PRODUCTCARD = true;
  
    // Indica si es algún home
    var IS_MAIN_HOME = (location.hostname.includes('plazaveaqafood') || location.hostname.includes('www.plazavea.com.pe') || location.hostname.includes('pruebasecspsa') || location.hostname.includes('plazavea.myvtex.com') || location.hostname.includes('beta.plazavea.com.pe')) && location.pathname === '/';
    var IS_FOOD_HOME = (location.hostname.includes('plazaveaqafood') || location.hostname.includes('www.plazavea.com.pe') || location.hostname.includes('pruebasecspsa') || location.hostname.includes('plazavea.myvtex.com') || location.hostname.includes('beta.plazavea.com.pe')) && location.pathname.indexOf('/supermercado') !== -1;
    var IS_NON_FOOD_HOME = (location.hostname.includes('plazaveaqafood') || location.hostname.includes('www.plazavea.com.pe') || location.hostname.includes('pruebasecspsa') || location.hostname.includes('plazavea.myvtex.com') || location.hostname.includes('beta.plazavea.com.pe')) && location.pathname.indexOf('/electro-hogar') !== -1;
  
    var SITE_NAME = IS_MAIN_HOME || IS_FOOD_HOME ? FOOD_SITE_NAME : NON_FOOD_SITE_NAME;
  
    var UBIGEO_VERSION = 46;
    var UBIGEO_NONFOOD_VERSION = 3;
  
    var CUSTOM_DATA_VERSION = 46;
    var MAINMENU_VERSION = 78;
    /*INIT MODAL DE PREFERENCIAS*******************************************/
    var MODAL_PREFERENCE_VERSION = 46;
  
    var TIME_MAX_PREFERENCE_STORAGE = 240; //minutos
  
    var UBIGEOS_DESHABILITADOS_METODO_PROGRAMADO = ["150112", "150119", "150123", "150126", "150127", "150138", "150129"];
  
    var UBIGEOS_DESHABILITADOS_METODO_PICKUP_STORE = [];
  
    var MODAL_PREFERENCE_VALIDATE_DISPATCH_CAPACITY = false;
  
    /**
          * Config para setear el producto por defecto para calcular metodos de entrega disponibles en el modal de preferencias. Este config se usa cuando el cliente está seteando sus preferencias sin agregar un producto
    */
    var MODAL_PREFERENCE_DEFAULT_PRODUCT = 41560;
  
    /**
          * Config para setear el producto por defecto para calcular disponibilidad de tienda
    */
    //var MODAL_PREFERENCE_PRODUCT_TO_VALIDATE_DISPATCH_CAPACITY = 4461;
    var MODAL_PREFERENCE_PRODUCT_TO_VALIDATE_DISPATCH_CAPACITY = 41560;
  
    var MODAL_PREFERENCE_SLA_DELIVERY_PROGRAMMED = "Despacho a Domicilio";
    var MODAL_PREFERENCE_SLA_DELIVERY_EXPRESS = "Delivery Express";
    var MODAL_PREFERENCE_SLA_PICKUP_POINT = "Recojo en Tienda";
    var MODAL_PREFERENCE_SLA_VEA_TO_CAR = "Vea al Auto";
    var MODAL_PREFERENCE_SLA_DISPATCH_IN_48_HOURS = "Directo Almacén en 48 Hrs";
  
    var MODAL_PREFERENCE_METHOD_DELIVERY_EXPRESS = "delivery-express";
    var MODAL_PREFERENCE_METHOD_DELIVERY_PROGRAMMED = "delivery-programado";
    var MODAL_PREFERENCE_METHOD_PICKUP_STORE = "recojo-en-tienda";
    var MODAL_PREFERENCE_METHOD_VEA_TO_CAR = "vea-al-auto";
    var MODAL_PREFERENCE_METHOD_DISPATCH_IN_48_HOURS = "directo-almacén-en-48-horas";
  
    var MODAL_PREFERENCE_METHOD_DELIVERY_EXPRESS_IS_ACTIVE = true;
    var MODAL_PREFERENCE_METHOD_DELIVERY_PROGRAMMED_IS_ACTIVE = true;
    var MODAL_PREFERENCE_METHOD_PICKUP_STORE_IS_ACTIVE = true;
    var MODAL_PREFERENCE_METHOD_VEA_TO_CAR_IS_ACTIVE = true;
    var MODAL_PREFERENCE_METHOD_DISPATCH_IN_48_HOURS_IS_ACTIVE = false;
  
    /*END MODAL DE PREFERENCIAS*******************************************/
  
    var HIDEMEASUREMENTUNIT = ['621'];
  
    /*INIT BANNERS MENU VERSION*******************************************/
    var BANNERS_MENU_VERSION = 17;
    /*END BANNERS MENU VERSION*******************************************/
  
  
  
    /*INIT MINICART*******************************************/
    var CARTQUANTITY = 20;
    var FREESHIPPING = 15;
    var MINICART_FREESHIPPING_DARKSTORE = 100;
    var CARTITEMS = 20;
  
    /**
    * Config para setear el maximo de unidades para food (pesables y no pesables) y nonfood
    */
    var QUANTITY_LIMIT = {
      'food': {
        'un': 20,
        'kg': 100
      },
      'nonfood': {
        'other': 10,
        'white-line': 3,
        'green-line': 3
      }
    };
    
    var FB_SEND_EVENTS_BY_CAPI = true;
    var FB_TEST_EVENT_CODE = 'TEST52326';
  
    var QUANTITY_LIMIT_BY_SKU = [  
      { sku: 10723766, limit: 3},
      /*{ sku: 10664098, limit: 6},
      { sku: 10664100, limit: 6},
      { sku: 10664097, limit: 6},
      { sku: 10664104, limit: 6},
      { sku: 10728868, limit: 6},
      { sku: 10729110, limit: 6},
      { sku: 10729109, limit: 6},
      { sku: 10729108, limit: 6},
      { sku: 10729106, limit: 6},
      { sku: 10729114, limit: 6},
      { sku: 10729105, limit: 6},
      { sku: 10614795, limit: 6},
      { sku: 10614796, limit: 6},*/
      
      { sku: 30857, limit: 6},
      { sku: 30924, limit: 6},
      { sku: 5094, limit: 6},
      { sku: 5652, limit: 6},
      { sku: 5096, limit: 6},
 
      { sku: 25152, limit: 6},
      
      { sku: 10225752, limit: 3},
      { sku: 10581996, limit: 3},
      { sku: 10582010, limit: 3},
      { sku: 10582014, limit: 3},
      
      
      { sku: 15066, limit: 3},
      { sku: 4715, limit: 3},
      { sku: 4461, limit: 3},
      { sku: 4658, limit: 3},
      { sku: 4505, limit: 3},
      
      
      { sku: 10297344, limit: 6},
      { sku: 589, limit: 6},
      { sku: 11988, limit: 6},
      { sku: 10215281, limit: 6},
      { sku: 28250, limit: 6},
      
      { sku: 10221244, limit: 6},
      
      { sku: 10378599, limit: 3},
      { sku: 10227655, limit: 3},   
      { sku: 10181308, limit: 6},
      { sku: 10015323, limit: 6},    
      { sku: 565, limit: 6},
      { sku: 612, limit: 6},
      { sku: 54697, limit: 6},
      { sku: 740, limit: 6},
      
      
      { sku: 10094870, limit: 80},
      { sku: 10094872, limit: 80},
      { sku: 10216307, limit: 80},
          
      { sku: 10212836, limit: 300},
      { sku: 10118526, limit: 300},
      { sku: 10109502, limit: 20 },
      { sku: 10109499, limit: 20 },
      { sku: 10109490, limit: 20 },
      { sku: 10109846, limit: 20 },
      { sku: 10109930, limit: 20 },
      { sku: 10112482, limit: 20 },
      { sku: 10112487, limit: 20 },
      { sku: 10112485, limit: 20 },
      { sku: 10112562, limit: 20 },
      { sku: 10112486, limit: 20 },
      { sku: 10112561, limit: 20 },
      { sku: 10113664, limit: 20 },
      { sku: 10113665, limit: 20 },
      { sku: 10113658, limit: 20 },
      { sku: 16563, limit: 20 },
      { sku: 16568, limit: 20 },
      { sku: 23708, limit: 20 },
      { sku: 23656, limit: 20 },
      { sku: 25048, limit: 20 },
      { sku: 24939, limit: 20 },
      { sku: 26613, limit: 20 },
      { sku: 28347, limit: 20 },
      { sku: 28431, limit: 20 },
      { sku: 28348, limit: 20 },
      { sku: 29553, limit: 20 },
      { sku: 29945, limit: 20 },
      { sku: 30762, limit: 20 },
      { sku: 30755, limit: 20 },
      { sku: 31010, limit: 20 },
      { sku: 30998, limit: 20 },
      { sku: 31230, limit: 20 },
      { sku: 32007, limit: 20 },
      { sku: 41516, limit: 20 },
      { sku: 41532, limit: 20 },
      { sku: 41531, limit: 20 },
      { sku: 41540, limit: 20 },
      { sku: 41521, limit: 20 },
      { sku: 42240, limit: 20 },
      { sku: 42128, limit: 20 },
      { sku: 45690, limit: 20 },
      { sku: 45698, limit: 20 },
      { sku: 47828, limit: 20 },
      { sku: 47899, limit: 20 },
      { sku: 47991, limit: 20 },
      { sku: 47914, limit: 20 },
      { sku: 47959, limit: 20 },
      { sku: 47915, limit: 20 },
      { sku: 48003, limit: 20 },
      { sku: 48015, limit: 20 },
      { sku: 47979, limit: 20 },
      { sku: 47907, limit: 20 },
      { sku: 48483, limit: 20 },
      { sku: 48485, limit: 20 },
      { sku: 48482, limit: 20 },
      { sku: 48480, limit: 20 },
      { sku: 48477, limit: 20 },
      { sku: 48484, limit: 20 },
      { sku: 48476, limit: 20 },
      { sku: 48478, limit: 20 },
      { sku: 48481, limit: 20 },
      { sku: 48479, limit: 20 },
      { sku: 48975, limit: 20 },
      { sku: 49722, limit: 20 },
      { sku: 49649, limit: 20 },
      { sku: 49813, limit: 20 },
      { sku: 49690, limit: 20 },
      { sku: 49881, limit: 20 },
      { sku: 49705, limit: 20 },
      { sku: 49692, limit: 20 },
      { sku: 49821, limit: 20 },
      { sku: 49663, limit: 20 },
      { sku: 49896, limit: 20 },
      { sku: 49647, limit: 20 },
      { sku: 49899, limit: 20 },
      { sku: 49816, limit: 20 },
      { sku: 51155, limit: 20 },
      { sku: 51151, limit: 20 },
      { sku: 51150, limit: 20 },
      { sku: 51529, limit: 20 },
      { sku: 51156, limit: 20 },
      { sku: 51524, limit: 20 },
      { sku: 51516, limit: 20 },
      { sku: 51519, limit: 20 },
      { sku: 51528, limit: 20 },
      { sku: 51506, limit: 20 },
      { sku: 51806, limit: 20 },
      { sku: 51805, limit: 20 },
      { sku: 51795, limit: 20 },
      { sku: 52035, limit: 20 },
      { sku: 52028, limit: 20 },
      { sku: 52040, limit: 20 },
      { sku: 54712, limit: 20 },
      { sku: 54870, limit: 20 },
      { sku: 54715, limit: 20 },
      { sku: 54847, limit: 20 },
      { sku: 54853, limit: 20 },
      { sku: 54872, limit: 20 },
      { sku: 54842, limit: 20 },
      { sku: 54895, limit: 20 },
      { sku: 54898, limit: 20 },
      { sku: 54894, limit: 20 },
      { sku: 54846, limit: 20 },
      { sku: 54881, limit: 20 },
      { sku: 54901, limit: 20 },
      { sku: 54891, limit: 20 },
      { sku: 59818, limit: 20 },
      { sku: 59817, limit: 20 },
      { sku: 59871, limit: 20 },
      { sku: 59803, limit: 20 },
      { sku: 59861, limit: 20 },
      { sku: 59820, limit: 20 },
      { sku: 59862, limit: 20 },
      { sku: 59870, limit: 20 },
      { sku: 63177, limit: 20 },
      { sku: 69572, limit: 20 },
      { sku: 69602, limit: 20 },
      { sku: 69574, limit: 20 },
      { sku: 69593, limit: 20 },
      { sku: 71481, limit: 20 },
      { sku: 72896, limit: 20 },
      { sku: 72894, limit: 20 },
      { sku: 72914, limit: 20 },
      { sku: 72908, limit: 20 },
      { sku: 72897, limit: 20 },
      { sku: 72901, limit: 20 },
      { sku: 72878, limit: 20 },
      { sku: 72895, limit: 20 },
      { sku: 72909, limit: 20 },
      { sku: 74071, limit: 20 },
      { sku: 74089, limit: 20 },
      { sku: 74078, limit: 20 },
      { sku: 74079, limit: 20 },
      { sku: 74096, limit: 20 },
      { sku: 74659, limit: 20 },
      { sku: 74694, limit: 20 },
      { sku: 80849, limit: 20 },
      { sku: 80810, limit: 20 },
      { sku: 80844, limit: 20 },
      { sku: 80840, limit: 20 },
      { sku: 80834, limit: 20 },
      { sku: 80828, limit: 20 },
      { sku: 80846, limit: 20 },
      { sku: 80854, limit: 20 },
      { sku: 81241, limit: 20 },
      { sku: 81465, limit: 20 },
      { sku: 81669, limit: 20 },
      { sku: 81789, limit: 20 },
      { sku: 82131, limit: 20 },
      { sku: 82123, limit: 20 },
      { sku: 82128, limit: 20 },
      { sku: 82141, limit: 20 },
      { sku: 82135, limit: 20 },
      { sku: 82137, limit: 20 },
      { sku: 82140, limit: 20 },
      { sku: 82124, limit: 20 },
      { sku: 82139, limit: 20 },
      { sku: 82122, limit: 20 },
      { sku: 82134, limit: 20 },
      { sku: 82125, limit: 20 },
      { sku: 82136, limit: 20 },
      { sku: 83865, limit: 20 },
      { sku: 83863, limit: 20 },
      { sku: 90346, limit: 20 },
      { sku: 90380, limit: 20 },
      { sku: 90391, limit: 20 },
      { sku: 90411, limit: 20 },
      { sku: 90344, limit: 20 },
      { sku: 90378, limit: 20 },
      { sku: 90427, limit: 20 },
      { sku: 90372, limit: 20 },
      { sku: 90351, limit: 20 },
      { sku: 90409, limit: 20 },
      { sku: 90350, limit: 20 },
      { sku: 90408, limit: 20 },
      { sku: 90349, limit: 20 },
      { sku: 90384, limit: 20 },
      { sku: 90407, limit: 20 },
      { sku: 90383, limit: 20 },
      { sku: 90406, limit: 20 },
      { sku: 90459, limit: 20 },
      { sku: 90423, limit: 20 },
      { sku: 90343, limit: 20 },
      { sku: 90414, limit: 20 },
      { sku: 90430, limit: 20 },
      { sku: 90460, limit: 20 },
      { sku: 90341, limit: 20 },
      { sku: 91378, limit: 20 },
      { sku: 91376, limit: 20 },
      { sku: 91377, limit: 20 },
      { sku: 10010693, limit: 20 },
      { sku: 10010695, limit: 20 },
      { sku: 10010686, limit: 20 },
      { sku: 10010691, limit: 20 },
      { sku: 10010692, limit: 20 },
      { sku: 10010690, limit: 20 },
      { sku: 10010694, limit: 20 },
      { sku: 10010689, limit: 20 },
      { sku: 10011418, limit: 20 },
      { sku: 10011422, limit: 20 },
      { sku: 10011420, limit: 20 },
      { sku: 10011423, limit: 20 },
      { sku: 10011415, limit: 20 },
      { sku: 10011417, limit: 20 },
      { sku: 10011419, limit: 20 },
      { sku: 10011413, limit: 20 },
      { sku: 10011414, limit: 20 },
      { sku: 10011416, limit: 20 },
      { sku: 10011421, limit: 20 },
      { sku: 10011424, limit: 20 },
      { sku: 10012796, limit: 20 },
      { sku: 10012818, limit: 20 },
      { sku: 10012876, limit: 20 },
      { sku: 10012884, limit: 20 },
      { sku: 10012795, limit: 20 },
      { sku: 10012869, limit: 20 },
      { sku: 10012887, limit: 20 },
      { sku: 10012882, limit: 20 },
      { sku: 10012871, limit: 20 },
      { sku: 10012872, limit: 20 },
      { sku: 10012819, limit: 20 },
      { sku: 10012878, limit: 20 },
      { sku: 10012886, limit: 20 },
      { sku: 10012870, limit: 20 },
      { sku: 10012888, limit: 20 },
      { sku: 10012885, limit: 20 },
      { sku: 10012873, limit: 20 },
      { sku: 10012881, limit: 20 },
      { sku: 10012879, limit: 20 },
      { sku: 10012883, limit: 20 },
      { sku: 10012874, limit: 20 },
      { sku: 10012875, limit: 20 },
      { sku: 10013225, limit: 20 },
      { sku: 10013230, limit: 20 },
      { sku: 10013234, limit: 20 },
      { sku: 10013236, limit: 20 },
      { sku: 10013226, limit: 20 },
      { sku: 10013242, limit: 20 },
      { sku: 10013223, limit: 20 },
      { sku: 10013239, limit: 20 },
      { sku: 10013229, limit: 20 },
      { sku: 10013238, limit: 20 },
      { sku: 10013240, limit: 20 },
      { sku: 10013227, limit: 20 },
      { sku: 10013243, limit: 20 },
      { sku: 10013228, limit: 20 },
      { sku: 10013244, limit: 20 },
      { sku: 10013233, limit: 20 },
      { sku: 10013232, limit: 20 },
      { sku: 10013248, limit: 20 },
      { sku: 10013246, limit: 20 },
      { sku: 10013250, limit: 20 },
      { sku: 10013241, limit: 20 },
      { sku: 10013235, limit: 20 },
      { sku: 10013245, limit: 20 },
      { sku: 10013231, limit: 20 },
      { sku: 10013247, limit: 20 },
      { sku: 10013418, limit: 20 },
      { sku: 10013419, limit: 20 },
      { sku: 10013417, limit: 20 },
      { sku: 10013420, limit: 20 },
      { sku: 10013928, limit: 20 },
      { sku: 10013938, limit: 20 },
      { sku: 10013932, limit: 20 },
      { sku: 10013934, limit: 20 },
      { sku: 10013935, limit: 20 },
      { sku: 10013941, limit: 20 },
      { sku: 10013933, limit: 20 },
      { sku: 10013930, limit: 20 },
      { sku: 10013927, limit: 20 },
      { sku: 10013945, limit: 20 },
      { sku: 10013946, limit: 20 },
      { sku: 10013937, limit: 20 },
      { sku: 10013936, limit: 20 },
      { sku: 10013931, limit: 20 },
      { sku: 10013943, limit: 20 },
      { sku: 10013944, limit: 20 },
      { sku: 10013940, limit: 20 },
      { sku: 10013929, limit: 20 },
      { sku: 10014424, limit: 20 },
      { sku: 10014426, limit: 20 },
      { sku: 10014425, limit: 20 },
      { sku: 10016549, limit: 20 },
      { sku: 10016576, limit: 20 },
      { sku: 10016593, limit: 20 },
      { sku: 10016573, limit: 20 },
      { sku: 10016589, limit: 20 },
      { sku: 10016607, limit: 20 },
      { sku: 10016550, limit: 20 },
      { sku: 10016577, limit: 20 },
      { sku: 10016552, limit: 20 },
      { sku: 10016578, limit: 20 },
      { sku: 10016548, limit: 20 },
      { sku: 10016575, limit: 20 },
      { sku: 10016592, limit: 20 },
      { sku: 10016597, limit: 20 },
      { sku: 10016696, limit: 20 },
      { sku: 10016572, limit: 20 },
      { sku: 10016588, limit: 20 },
      { sku: 10016606, limit: 20 },
      { sku: 10016579, limit: 20 },
      { sku: 10016570, limit: 20 },
      { sku: 10016586, limit: 20 },
      { sku: 10016571, limit: 20 },
      { sku: 10016587, limit: 20 },
      { sku: 10016750, limit: 20 },
      { sku: 10016574, limit: 20 },
      { sku: 10016591, limit: 20 },
      { sku: 10016747, limit: 20 },
      { sku: 10016749, limit: 20 },
      { sku: 10016746, limit: 20 },
      { sku: 10016697, limit: 20 },
      { sku: 10016693, limit: 20 },
      { sku: 10016694, limit: 20 },
      { sku: 10016695, limit: 20 },
      { sku: 10017030, limit: 20 },
      { sku: 10017031, limit: 20 },
      { sku: 10017099, limit: 20 },
      { sku: 10017032, limit: 20 },
      { sku: 10017029, limit: 20 },
      { sku: 10017033, limit: 20 },
      { sku: 10018141, limit: 20 },
      { sku: 10019801, limit: 20 },
      { sku: 10019800, limit: 20 },
      { sku: 10019802, limit: 20 },
      { sku: 10019804, limit: 20 },
      { sku: 10019805, limit: 20 },
      { sku: 10019806, limit: 20 },
      { sku: 10019803, limit: 20 },
      { sku: 10019859, limit: 20 },
      { sku: 10021338, limit: 20 },
      { sku: 10021336, limit: 20 },
      { sku: 10021339, limit: 20 },
      { sku: 10021337, limit: 20 },
      { sku: 10021335, limit: 20 },
      { sku: 10021340, limit: 20 },
      { sku: 10021770, limit: 20 },
      { sku: 10023252, limit: 20 },
      { sku: 10023251, limit: 20 },
      { sku: 10023341, limit: 20 },
      { sku: 10023343, limit: 20 },
      { sku: 10023336, limit: 20 },
      { sku: 10023337, limit: 20 },
      { sku: 10023344, limit: 20 },
      { sku: 10023342, limit: 20 },
      { sku: 10023340, limit: 20 },
      { sku: 10023332, limit: 20 },
      { sku: 10023339, limit: 20 },
      { sku: 10023338, limit: 20 },
      { sku: 10025921, limit: 20 },
      { sku: 10025922, limit: 20 },
      { sku: 10025906, limit: 20 },
      { sku: 10030440, limit: 20 },
      { sku: 10030433, limit: 20 },
      { sku: 10030437, limit: 20 },
      { sku: 10030430, limit: 20 },
      { sku: 10030441, limit: 20 },
      { sku: 10030492, limit: 20 },
      { sku: 10030436, limit: 20 },
      { sku: 10030493, limit: 20 },
      { sku: 10030439, limit: 20 },
      { sku: 10030438, limit: 20 },
      { sku: 10030431, limit: 20 },
      { sku: 10030434, limit: 20 },
      { sku: 10030495, limit: 20 },
      { sku: 10030432, limit: 20 },
      { sku: 10030435, limit: 20 },
      { sku: 10030497, limit: 20 },
      { sku: 10030494, limit: 20 },
      { sku: 10030496, limit: 20 },
      { sku: 10031524, limit: 20 },
      { sku: 10032552, limit: 20 },
      { sku: 10033459, limit: 20 },
      { sku: 10033452, limit: 20 },
      { sku: 10033482, limit: 20 },
      { sku: 10033745, limit: 20 },
      { sku: 10033756, limit: 20 },
      { sku: 10033755, limit: 20 },
      { sku: 10033754, limit: 20 },
      { sku: 10035303, limit: 20 },
      { sku: 10035304, limit: 20 },
      { sku: 10035592, limit: 20 },
      { sku: 10035591, limit: 20 },
      { sku: 10035595, limit: 20 },
      { sku: 10035594, limit: 20 },
      { sku: 10035593, limit: 20 },
      { sku: 10038061, limit: 20 },
      { sku: 10038081, limit: 20 },
      { sku: 10038087, limit: 20 },
      { sku: 10038080, limit: 20 },
      { sku: 10038084, limit: 20 },
      { sku: 10038083, limit: 20 },
      { sku: 10038082, limit: 20 },
      { sku: 10038088, limit: 20 },
      { sku: 10038079, limit: 20 },
      { sku: 10039211, limit: 20 },
      { sku: 10039212, limit: 20 },
      { sku: 10039908, limit: 20 },
      { sku: 10041047, limit: 20 },
      { sku: 10041045, limit: 20 },
      { sku: 10041050, limit: 20 },
      { sku: 10041046, limit: 20 },
      { sku: 10041048, limit: 20 },
      { sku: 10041049, limit: 20 },
      { sku: 10044029, limit: 20 },
      { sku: 10051653, limit: 20 },
      { sku: 10051654, limit: 20 },
      { sku: 10051886, limit: 20 },
      { sku: 10052488, limit: 20 },
      { sku: 10052487, limit: 20 },
      { sku: 10052499, limit: 20 },
      { sku: 10052493, limit: 20 },
      { sku: 10052492, limit: 20 },
      { sku: 10052498, limit: 20 },
      { sku: 10052489, limit: 20 },
      { sku: 10052486, limit: 20 },
      { sku: 10052495, limit: 20 },
      { sku: 10052494, limit: 20 },
      { sku: 10052496, limit: 20 },
      { sku: 10052497, limit: 20 },
      { sku: 10052824, limit: 20 },
      { sku: 10052825, limit: 20 },
      { sku: 10052822, limit: 20 },
      { sku: 10052823, limit: 20 },
      { sku: 10052844, limit: 20 },
      { sku: 10054276, limit: 20 },
      { sku: 10054560, limit: 20 },
      { sku: 10054568, limit: 20 },
      { sku: 10054567, limit: 20 },
      { sku: 10054561, limit: 20 },
      { sku: 10054566, limit: 20 },
      { sku: 10054562, limit: 20 },
      { sku: 10054569, limit: 20 },
      { sku: 10054565, limit: 20 },
      { sku: 10054563, limit: 20 },
      { sku: 10054564, limit: 20 },
      { sku: 10054795, limit: 20 },
      { sku: 10054794, limit: 20 },
      { sku: 10054820, limit: 20 },
      { sku: 10054853, limit: 20 },
      { sku: 10054855, limit: 20 },
      { sku: 10054854, limit: 20 },
      { sku: 10054818, limit: 20 },
      { sku: 10054873, limit: 20 },
      { sku: 10054793, limit: 20 },
      { sku: 10054856, limit: 20 },
      { sku: 10054872, limit: 20 },
      { sku: 10054796, limit: 20 },
      { sku: 10054819, limit: 20 },
      { sku: 10057619, limit: 20 },
      { sku: 10058647, limit: 20 },
      { sku: 10058649, limit: 20 },
      { sku: 10058643, limit: 20 },
      { sku: 10060650, limit: 20 },
      { sku: 10060648, limit: 20 },
      { sku: 10060649, limit: 20 },
      { sku: 10061877, limit: 20 },
      { sku: 10061878, limit: 20 },
      { sku: 10062740, limit: 20 },
      { sku: 10062739, limit: 20 },
      { sku: 10062741, limit: 20 },
      { sku: 10070960, limit: 20 },
      { sku: 10070959, limit: 20 },
      { sku: 10071029, limit: 20 },
      { sku: 10071030, limit: 20 },
      { sku: 10071169, limit: 20 },
      { sku: 10079018, limit: 20 },
      { sku: 10079023, limit: 20 },
      { sku: 10079019, limit: 20 },
      { sku: 10079026, limit: 20 },
      { sku: 10079030, limit: 20 },
      { sku: 10079029, limit: 20 },
      { sku: 10079031, limit: 20 },
      { sku: 10079027, limit: 20 },
      { sku: 10079028, limit: 20 },
      { sku: 10079024, limit: 20 },
      { sku: 10079025, limit: 20 },
      { sku: 10079032, limit: 20 },
      { sku: 10079033, limit: 20 },
      { sku: 10079435, limit: 20 },
      { sku: 10079436, limit: 20 },
      { sku: 10083778, limit: 20 },
      { sku: 10083779, limit: 20 },
      { sku: 10104791, limit: 20 },
      { sku: 10104835, limit: 20 },
      { sku: 10104833, limit: 20 },
      { sku: 10104792, limit: 20 },
      { sku: 10104793, limit: 20 },
      { sku: 10104832, limit: 20 },
      { sku: 10104834, limit: 20 },
      { sku: 10104830, limit: 20 },
      { sku: 0000003447, limit: 6 },
      { sku: 0000002033, limit: 3 },
      { sku: 0000001869, limit: 6 },
      { sku: 15066, limit: 6 },
      { sku: 4715, limit: 6 },
      { sku: 4658, limit: 6 },
      { sku: 4505, limit: 6 },
      { sku: 10036026, limit: 6 },
      { sku: 585, limit: 6 },      
      { sku: 615, limit: 6 },
      { sku: 713, limit: 6 },
      { sku: 714, limit: 6 },
      { sku: 749, limit: 6 },
      { sku: 909, limit: 6 },
      { sku: 916, limit: 6 },
      { sku: 1525, limit: 6 },
      { sku: 14140, limit: 6 },
      { sku: 23798, limit: 6 },      
      { sku: 62575, limit: 6 },
      { sku: 62593, limit: 6 },
      { sku: 90340, limit: 6 },
      { sku: 62575, limit: 6 },
      { sku: 62593, limit: 6 },
      { sku: 10018144, limit: 6 },      
      { sku: 10018145, limit: 6 },
      { sku: 10018195, limit: 6 },
      { sku: 10033838, limit: 6 },
      { sku: 10036026, limit: 6 },
      { sku: 10036027, limit: 6 },
      { sku: 10036028, limit: 6 },
      { sku: 10036029, limit: 6 },
      { sku: 10061635, limit: 6 },
      { sku: 10212703, limit: 6 },
      { sku: 10015322, limit: 6 },
      { sku: 24925, limit: 6 },
	  { sku: 907, limit: 6 },
      { sku: 4658, limit: 6 },
      { sku: 4461, limit: 6 },
      { sku: 584, limit: 6 },
      { sku: 10036025, limit: 6 },
      { sku: 10061634, limit: 6 },
      { sku: 10573475, limit: 3 },
      { sku: 10573476, limit: 3 },
      { sku: 10573477, limit: 3 },
      { sku: 10708280, limit: 1 },
      { sku: 54265, limit: 6 },
      { sku: 10670704, limit: 3 },
      { sku: 10733812, limit: 6 },
      { sku: 597, limit: 6 },
      { sku: 43606, limit: 6 },
      { sku: 43529, limit: 6 },
      { sku: 10043432, limit: 6 }
    ];
  
    /**
    * Config para setear el maximo de unidades para delivery express  
    */
    var MAX_QUANTITY_ITEMS_EXPRESS = 15;
  
    /*END MINICART*******************************************/
  
  
  
    /***
     * Prod: plazavea
     * QA: plazaveaambienteqa
     */
    var MASTER_DATA_ACCOUNT = 'plazavea';
  
    /**
     * Prod: 10
     * QA: 6
     */
    var LIST_SALES_CHANNEL_EXPRESS = [10, 16, 17, 18, 19, 20, 27, 29, 36, 39, 41];
    var LIST_SALES_UBIGEO_EXPRESS = [150122, 150104, 150140, 150121, 150120, 150113, 150131, 150136, 150121, 150130, 150141, 150116, 150114, 150105, 150108, 150117, 150132, 140124];
    var LIST_SALES_CHANNEL_HAS_EXPRESS = [3, 14, 1, 8, 7];
    var SALES_CHANNEL_EXPRESS = '10';
  
    /**
    * IDs Departamentos Nonfood
    *	Prod: 
    *	QA: 21,18,19
    */
    var CATEGORYNONFOOD = [1138, 681, 1105, 1409, 679, 922, 666, 620, 898, 1258, 1098, 678, 1761];
    var REDIRECT_ELECTRO_VERSION = 5;
    var BEST_CYBER_DEALS_VERSION = 24;
  
    /**
     * ID de la colecciÃ³n de Non Food
     * para el home principal
     */
    var MAIN_HOME_NON_FOOD_COLLECTION_ID = '3400';
    var CENASNAVIDENAS = [43164, 43163, 43162, 43042];
  
    /**
      * Config para sku en duro de producto bolsa biodegradable
      * para food
      */
    var SKU_BOLSA = 58122;
  
    /**
    * Skus Productos con variantes
    * sin octógonos
    */
    var NO_OCTOGONS = [41808, 41809, 58240, 58241];
  
    /**
     * Config para el modulo de contador
     * Se configura la fecha de inicio del evento al que se hace referencia
     */
    var COUNTER_TIMER = "2019/11/13 23:59:59";
  
    /**
    * Config para el popup producto bomba (hora militar)
    *
    */
  
    var DISPLAY_PRODUCT_BOMBA = false;
  
    var URL_PRODUCT_BOMBA = 'https://tienda.plazavea.com.pe/televisor-samsung-led-58-uhd-smart-tv-un58tu7000gxpe/p';
  
    var IMAGE_DESKTOP_PRODUCT_BOMBA = 'https://plazavea.vteximg.com.br/arquivos/Popup-desktop-sku20196335.png';
  
    var IMAGE_MOBILE_PRODUCT_BOMBA = 'https://plazavea.vteximg.com.br/arquivos/Popup-mobile-sku20196335.png';
  
    var ALT_PRODUCT_BOMBA = 'UN58TU7000GXPE';
  
    var TIME_PRODUCT_BOMBA = {
      'start': '06:00',
      'end': '23:59'
    };
  
  
    /**
    * Config para quitar caracteres extraños en buscador  
    */
    var REGEXP_INVALID_CARACTER = /['%()."]+/g;
  
  
    /**
    * SellerCenter
    */
    var ECOMMERCES = ["promart", "oechsle", "1", "plazaveasellerelectrohogar"];
  
    /*INIT HOMECONTENT*******************************************/
    var HOMECONTENT_TYPE_STANDAR = "regular";
    var HOMECONTENT_TYPE_CYBER = "cyber";
    var HOMECONTENT_TYPE = HOMECONTENT_TYPE_STANDAR;
    var HOMECONTENT_SALE_CHANNEL = {
      FOOD: 1,
      NON_FOOD: 1,
      DIRECTO_ALMACEN: 3
    };
  
    /*END CROSSPAGE*******************************************/
  
  
    /*INIT CROSSPAGE*******************************************/
    var CROSSPAGE_ALERT_POPUP_DISPLAY = false;
    var CROSSPAGE_ALERT_POPUP_VALIDATE_WITH_SESSIONSTORAGE = true;
  
    var CROSSPAGE_RETURN_TO_TOP_DISPLAY = true;
  	var SHOW_MODAL_SUBSCRIPTION = true;
    /*END CROSSPAGE*******************************************/
  
    /*INIT WHITE LABEL*******************************************/
    var WHITE_LABEL_IS_ACTIVE = true;
    var WHITE_LABEL_SALECHANNEL_PRINCIPAL = 1;
    var WHITE_LABEL_SALECHANNEL_EXPRESS = 2;
    var WHITE_LABEL_SALECHANNEL_SPLIT = 3;
  	var WHITE_LABEL_SALECHANNEL_TELEVENTAS = 7;
    var WHITE_LABEL_FOR_DIRECTO_ALMACEN = 'plazaveaswl782s'
    /*END WHITE LABEL*******************************************/
  
    /**
    * Config para el saleschannel de nonfood
    *
    */
    var WAREHOUSE_CENTRO_DISTRIBUCION = ['STK445NF', 'STK917NF', 'STK445PRV', 'SW-81','STKPVBLM','STKPRVBSH','STKPRBRW','STKPRVCN','STKPRVCMX','STKPRVCSA','STKPRVDLK','STKPRVDRI','STKPRVEB','STKPRVCI','STKPRVEC','STKPRVFRL','STKPRVFJ','STKPRVGLOB','STKPRVIMA','STKPRVID','STKPRVIG','STKPRVINT','STKPRVIKR','STKPRVKM','STKPRVMB','STKPRVMP','STKPRVMA','STKPRVIDE','STKPRVMT','STKPRVGR','STKPRVNUB','STKPRVOST','STKPRVOX','STKPRVPNC','STKPRVPA','STKPRVPEL','STKPRVSL','STKPRVSO','STKPRVSWH','STKPRVTHM','STKPRVVI','STKPRVVI','STKPRVMNT'];
  
    /*INIT CATEGORY*******************************************/
    //var CATEGORY_SHOWCASE_ID = 'af10e26f-8ca5-497c-8fd3-690af2dfbe0b';
    var CATEGORY_SHOWCASE_ID = '1277f5d1-3d04-49c3-9239-d435fb5e7e29';
    /*END CATEGORY*******************************************/
  
    var VTEX_API_APP_KEY = 'vtexappkey-plazavea-MAVSWE';
    var VTEX_API_APP_TOKEN = 'VDQNSXUBTIKTHJVONAMUHRJUJAFCZWJYDTSNIQVKOTWUMGAQDTEMPVHDUWDSRRBWZMPORIFXFBGOVOHDZPZFSWJIMOTMMCTWRZVAQMZUNGHOPSIFOATBSWECCHCCOTKD';
  
    var LANDING_MAINTENANCE_ACTIVE = false;
    var LANDING_MAINTENANCE_ENABLE_URLS = [
      'plazavea.myvtex.com',
      'plazavea.vtexcommercestable.com.br'
    ];
    var LANDING_MAINTENANCE_REDIRECT_TO_URL = '/mantenimiento';
  
    var CURRENT_VTEX_DOMAIN = 'plazavea';
    var CURRENT_WEB_URL = 'plazavea.com.pe';
  
    var SELLER_ID_PLAZAVEA = '1';
  
    var VIDEOTUTORIAL_IS_ACTIVE = true;
    var VIDEOTUTORIAL_LINK = 'https://www.youtube.com/embed/X8_TQQlpbzI?autoplay=1';
  
    var LANDINGS_WHIT_BUTTON_ADD_ACTIVE_SHOWCASE = ['/navidad'];
  
    var GOOGLE_MAPS_AUTOCOMPLETE_DISTRICTS_RULES = [
      { district: 'Cercado de Lima', useWith: 'Lima' },
      { district: 'Organos', useWith: 'Los Organos' },
      { district: 'Baños del Inca', useWith: 'Los Baños Del Inca' },
      { district: 'Carmen de la Legua - Reynoso', useWith: 'Carmen de la Legua Reynoso' },
      { district: 'Distrito de Víctor Larco Herrera', useWith: 'Victor Larco Herrera' },
    ];
      
    var GOOGLE_MAPS_ALIASES = {
      department: {
        'Provincia de Lima': 'Lima',
        'Gobierno Regional de Lima': 'Lima',
      },
      province: {
        'Provincia de Lima': 'Lima'
      },
      district: {
        'Cercado de Lima': 'Lima',
        'Organos': 'Los Organos',
        'Baños del Inca': 'Los Baños Del Inca',
        'Carmen de la Legua - Reynoso': 'Carmen de la Legua Reynoso',
        'Distrito de Víctor Larco Herrera': 'Victor Larco Herrera'
      }
  	};
  
    var GOOGLE_MAPS_API_KEY = "AIzaSyALa0Xz-gLQqkivSSbFVoQcEGthNhqa6dg";
    var HERE_API_KEY = "4Oh4x6vpu2tTvXZuJjv6Mv-HDABLg9AaH_dSZooHDGc";
  
    var PREFIX_WL = "plazaveaswl";
    var WLS_WHITOUT_PAYMENT_ON_DELIVERY = ['plazaveaswl782', 'plazaveaswl448', 'plazaveaswl120', 'plazaveaswl118']
    var SELLERS_VTEX = ['oechsle', 'promart'];
    var CATEGORY_CUSTOM_NAME = [{
      menuCatName: 'Ahorro Packs',
      vtexCatName: 'Packs'
    }];
    
    var PROMO_AGORAPAY = {
      departments: [
        431, 814, 77, 621, 2, 493, 1073, 210, 845, 478
      ],
      categories: [
        1723, 1716, 1715, 1724, 1721, 1718, 1727, 1722, 1725, 
        1717, 1719, 1728, 1726, 301, 307, 300, 299, 298, 303, 
        637, 306, 305, 603, 407, 604, 1627
      ],
      subcategories: [
        26, 36, 25, 34, 30, 32, 649, 31, 33, 28, 29, 413, 1371, 
        414, 415, 416, 417, 1662, 1661, 1283
      ]
    }
    
    var SALESFORCE_ACTIVE = true;
  	var DEPARTMENTS_WITH_PRINCIPAL_SPECS = ["679"];
    var TOH_FIRST_ONLINE_PURCHASE_REFUND = 100;
  	var IBK_PROM_CLUSTER_IDS = [];
    var TOH_TAXES_RANGE = [
      /*{ min: 0, max: 1, tax: 0 },
      { min: 2, max: 11, tax: 5.18 },
      { min: 12, max: 100, tax: 3.38 }
      { min: 0, max: 12, tax: 0 },*/
      { min: 2, max: 6, tax: 0 },
      { min: 13, max: 100, tax: 3.38 }
    ];
  	var OUTSTANDING_FEATURES = [
      {
        entityID: 766,
        entityType: 'subcategory',
        optionalName: '/Tecnología/Computo/Laptops/',
        specifications: ['Tamaño de la pantalla', 'Procesador', 'Memoria RAM', 'Capacidad del disco duro'],
        specificationsLabel: ['Pantalla', 'Procesador', 'Memoria RAM', 'Capacidad del disco duro']
      },
      {
        entityID: 917,
        entityType: 'subcategory',
        optionalName: '/Tecnología/Telefonía/Celulares y Smartphones/',
        specifications: ['Tamaño pantalla celulares', 'Memoria RAM', 'Memoria interna', 'Tecnología celular'],
        specificationsLabel: ['Pantalla', 'Memoria RAM', 'Memoria interna', 'Tecnología']
      },
      {
        entityID: 687,
        entityType: 'category',
        optionalName: '/Tecnología/Televisores/',
        specifications: ['Tecnología TV', 'Resolución de imagen', 'Procesador', 'Sistema operativo'],
        specificationsLabel: ['Tecnología', 'Resolución de imagen', 'Procesador', 'Sistema operativo']
      },
      {
        entityID: 802,
        entityType: 'category',
        optionalName: '/Dormitorio/Colchones/',
        specifications: ['Alto', 'Ancho', 'Cantidad De Resortes']
      },
      {
        entityID: 1098,
        entityType: 'department',
        optionalName: '/Muebles/',
        specifications: ['Alto', 'Ancho', 'Profundidad']
      },
      {
        entityID: 690,
        entityType: 'category',
        optionalName: '/Electrohogar/Cocinas/',
        specifications: ['Alto', 'Ancho', 'Profundidad']
      },
      {
        entityID: 753,
        entityType: 'subcategory',
        optionalName: '/Electrohogar/Electrodomésticos de Cocina/Hornos Microondas/',
        specifications: ['Alto', 'Ancho', 'Profundidad']
      },
      {
        entityID: 691,
        entityType: 'category',
        optionalName: '/Electrohogar/Lavado/',
        specifications: ['Alto', 'Ancho', 'Profundidad']
      },
      {
        entityID: 756,
        entityType: 'subcategory',
        optionalName: '/Electrohogar/Refrigeración/Refrigeradoras/',
        specifications: ['Alto', 'Ancho', 'Profundidad']
      },
      {
        entityID: 1422 ,
        entityType: 'category',
        optionalName: '/Decohogar/Parrillas/',
        specifications: ['Material', 'Alto', 'Ancho']
      },
      {
        entityID: 1258,
        entityType: 'department',
        optionalName: '/Moda/',
        specifications: ['Material Principal', 'Composición']
      }
    ];
  
  	var IMAGES_TRANSITION = [
      {
        regexp: /\/moda(\/[a-z\-]*){0,2}/g,
        specification: { name: 'Color' },
        duration: 2000,
        active: true
      },
      {
        regexp: /\/calzado(\/[a-z\-]*){0,2}/g,
        specification: { name: 'Color' },
        duration: 2000,
        active: true
      }
    ];
    
    return {
      FOOD_SITE_NAME,
      NON_FOOD_SITE_NAME,
      FOOD_SITE_URL,
      NONFOOD_SITE_URL,
      SITE_NAME,
      IS_MAIN_HOME,
      IS_FOOD_HOME,
      IS_NON_FOOD_HOME,
      CARTITEMS,
      UBIGEO_VERSION,
      UBIGEO_NONFOOD_VERSION,
      MAINMENU_VERSION,
      CUSTOM_DATA_VERSION,
      MASTER_DATA_ACCOUNT,
      LIST_SALES_CHANNEL_EXPRESS,
      LIST_SALES_UBIGEO_EXPRESS,
      SALES_CHANNEL_EXPRESS,
      CATEGORYNONFOOD,
      REDIRECT_ELECTRO_VERSION,
      BEST_CYBER_DEALS_VERSION,
      MAIN_HOME_NON_FOOD_COLLECTION_ID,
      CENASNAVIDENAS,
      SHOW_FREE_SHIPPING,
      SKU_BOLSA,
      TIME_MAX_PREFERENCE_STORAGE,
      NO_OCTOGONS,
      COUNTER_TIMER,
      REGEXP_INVALID_CARACTER,
      QUANTITY_LIMIT,
      QUANTITY_LIMIT_BY_SKU,
      TIME_PRODUCT_BOMBA,
      MAX_QUANTITY_ITEMS_EXPRESS,
      ECOMMERCES,
  
      MODAL_PREFERENCE_DEFAULT_PRODUCT,
      UBIGEOS_DESHABILITADOS_METODO_PROGRAMADO,
  
      CARTQUANTITY,
      FREESHIPPING,
      MINICART_FREESHIPPING_DARKSTORE,
  
      MODAL_PREFERENCE_VERSION,
      MODAL_PREFERENCE_VALIDATE_DISPATCH_CAPACITY,
      MODAL_PREFERENCE_PRODUCT_TO_VALIDATE_DISPATCH_CAPACITY,
      MODAL_PREFERENCE_METHOD_DELIVERY_EXPRESS,
      MODAL_PREFERENCE_METHOD_DELIVERY_PROGRAMMED,
      MODAL_PREFERENCE_METHOD_PICKUP_STORE,
      MODAL_PREFERENCE_METHOD_VEA_TO_CAR,
      MODAL_PREFERENCE_METHOD_DISPATCH_IN_48_HOURS,
      MODAL_PREFERENCE_SLA_DELIVERY_PROGRAMMED,
      MODAL_PREFERENCE_SLA_DELIVERY_EXPRESS,
      MODAL_PREFERENCE_SLA_PICKUP_POINT,
      MODAL_PREFERENCE_SLA_VEA_TO_CAR,
      MODAL_PREFERENCE_SLA_DISPATCH_IN_48_HOURS,
      MODAL_PREFERENCE_METHOD_DELIVERY_EXPRESS_IS_ACTIVE,
      MODAL_PREFERENCE_METHOD_DELIVERY_PROGRAMMED_IS_ACTIVE,
      MODAL_PREFERENCE_METHOD_PICKUP_STORE_IS_ACTIVE,
      MODAL_PREFERENCE_METHOD_VEA_TO_CAR_IS_ACTIVE,
      MODAL_PREFERENCE_METHOD_DISPATCH_IN_48_HOURS_IS_ACTIVE,
  
      CROSSPAGE_ALERT_POPUP_DISPLAY,
      CROSSPAGE_ALERT_POPUP_VALIDATE_WITH_SESSIONSTORAGE,
      CROSSPAGE_RETURN_TO_TOP_DISPLAY,
      SHOW_MODAL_SUBSCRIPTION,
  
      HOMECONTENT_TYPE_STANDAR,
      HOMECONTENT_TYPE_CYBER,
      HOMECONTENT_TYPE,
      HOMECONTENT_SALE_CHANNEL,
  
      DISPLAY_PRODUCT_BOMBA,
      URL_PRODUCT_BOMBA,
      IMAGE_DESKTOP_PRODUCT_BOMBA,
      IMAGE_MOBILE_PRODUCT_BOMBA,
      ALT_PRODUCT_BOMBA,
  
      WHITE_LABEL_IS_ACTIVE,
      WHITE_LABEL_SALECHANNEL_PRINCIPAL,
      WHITE_LABEL_SALECHANNEL_EXPRESS,
      WHITE_LABEL_SALECHANNEL_SPLIT,
      WHITE_LABEL_SALECHANNEL_TELEVENTAS,
      WHITE_LABEL_FOR_DIRECTO_ALMACEN,
  
      WAREHOUSE_CENTRO_DISTRIBUCION,
  
      CATEGORY_SHOWCASE_ID,
  
      VTEX_API_APP_KEY,
      VTEX_API_APP_TOKEN,
  
      LANDING_MAINTENANCE_ACTIVE,
      LANDING_MAINTENANCE_ENABLE_URLS,
      LANDING_MAINTENANCE_REDIRECT_TO_URL,
  
      CURRENT_VTEX_DOMAIN,
      CURRENT_WEB_URL,
  
      SELLER_ID_PLAZAVEA,
      APP_KEY_GEODIR,
  
      VIDEOTUTORIAL_IS_ACTIVE,
      VIDEOTUTORIAL_LINK,
  
      WHITELABEL_SIMULATE_PRODUCTCARD,
  
      LANDINGS_WHIT_BUTTON_ADD_ACTIVE_SHOWCASE,
  
      GOOGLE_MAPS_AUTOCOMPLETE_DISTRICTS_RULES,
      GOOGLE_MAPS_ALIASES,
      GOOGLE_MAPS_API_KEY,
      HERE_API_KEY,
      HIDEMEASUREMENTUNIT,
  
      PREFIX_WL,
      WLS_WHITOUT_PAYMENT_ON_DELIVERY,
      SELLERS_VTEX,
      CATEGORY_CUSTOM_NAME,
      BANNERS_MENU_VERSION,
      
      FB_TEST_EVENT_CODE,
      FB_SEND_EVENTS_BY_CAPI,
      PROMO_AGORAPAY,
      
      SALESFORCE_ACTIVE,
      DEPARTMENTS_WITH_PRINCIPAL_SPECS,
      TOH_FIRST_ONLINE_PURCHASE_REFUND,
      IBK_PROM_CLUSTER_IDS,
      TOH_TAXES_RANGE,
      OUTSTANDING_FEATURES,
      IMAGES_TRANSITION
    };
  
  })();