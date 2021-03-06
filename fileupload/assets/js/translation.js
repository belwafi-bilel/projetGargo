jQuery(document).ready(function($) {
  var language = {
      pt: {
        // autocomplete: 'Autocomplète',
        // button: 'Bouton',
        // text: 'Champ de texte',
        // checkbox: 'Case à cocher',
        // checkboxGroup: 'Groupe Checkbox',
        // dateField: 'Champ de dates',
        // fileUpload: 'Téléchargement de fichiers',
        // header: 'Entête',
        // paragraph: 'Paragraphe',
        // hidden: 'Entrée cachée',
        // number: 'Nombre',
        // select: 'Sélectionner',
        // getStarted: 'Arraste um campo do direito a esta área',
        // editorTitle: 'Elementos de formulário',
        // radioGroup: 'Groupe radio',
        // textArea: 'Zone de texte',
        // viewXML: 'Exibir XML'


        addOption: 'Ajouter une option',
        allFieldsRemoved: 'Tous les champs ont été supprimés.',
        allowSelect: 'Autoriser toutes les options',
        autocomplete: 'Autocomplète',
        button: 'Bouton',
        cannotBeEmpty: 'Ce champ nest pas autorisé en blanc',
        checkboxGroup: 'Groupe Checkbox',
        checkbox: 'Case à cocher',
        checkboxes: 'Groupe de cases à cocher',
        className: 'CSS Catégorie',
        clearAllMessage: 'Êtes-vous sûr de vouloir supprimer tous les éléments?',
        clearAll: 'Effacé',
        close: 'fermer',
        header: 'Entête',
        number: 'Nombre',
        copy: 'Copier sur le livre de découpage',
        dateField: 'Champ de date',
        description: 'Texte rapide',
        descriptionField: 'Décrivez la description',
        devMode: 'mode développeur',
        editNames: 'Modifier le nom',
        editorTitle: 'Élément de formulaire',
        editXML: 'modifier XML',
        fieldDeleteWarning: false,
        fieldVars: 'Variable de terrain',
        fieldNonEditable: 'Ce champ ne peut pas être modifié.',
        fieldRemoveWarning: 'Êtes-vous sûr de vouloir supprimer cet article?',
        fileUpload: 'Téléchargement de fichiers',
        formUpdated: 'Formulaire téléchargé',
        getStarted: 'Ajouter des champs en les faisant glisser de la barre latérale droite vers cette zone',
        hide: 'modifier',
        hidden: 'Cacher le champ',
        label: 'Nom de domaine',
        labelEmpty: 'Le nom du champ ne peut pas être vide',
        limitRole: 'Limiter les rôles lisibles:',
        mandatory: 'Mandatory',
        maxlength: 'La longueur maximale',
        minOptionMessage: 'Ce champ comporte au moins deux options',
        name: 'ID',
        no: 'non',
        off: 'éteindre',
        on: 'ouvrir',
        option: 'Option',
        optional: 'Optionnel',
        optionLabelPlaceholder: 'Nom de l\'option ',
        optionValuePlaceholder: 'Valeur de loption',
        optionEmpty: 'Option jusquà exigé',
        paragraph: 'Segmenté',
        placeholder: 'Paragraphe de texte',
        placeholders: {
          value: 'valeur',
          label: 'Nom de l\'option',
          text: '',
          textarea: '',
          email: 'Entrez votre email',
          placeholder: '',
          className: 'Pour plusieurs catégories, utilisez des blancs.',
          password: 's\'il vous plait entrez votre mot de passe',
        },
        preview: 'Afficher l\'aperçu',
        radioGroup: 'Groupe de radio',
        radio: 'Radio',
        removeMessage: 'Supprimer le composant',
        remove: '&#215;',
        required: 'nécessaire',
        richText: 'Boîte d\'édition de texte',
        roles: 'accès',
        save: 'le magasin',
        selectOptions: 'Option',
        select: 'sélectionner',
        selectColor: 'Sélection de la couleur',
        selectionsMessage: 'Autoriser les sélections multiples',
        size: 'Taille',
        sizes: {
          xs: 'Minimal',
          sm: 'petit',
          m: 'Défaut',
          lg: 'Gros'
        },
        style: 'style',
        styles: {
          btn: {
            'default': 'Défaut',
            danger: 'Danger',
            info: 'Info',
            primary: 'Primary',
            success: 'Success',
            warning: 'Warning'
          }
        },
        subtype: 'format',        
        text: 'Champ de texte',
        textArea: 'Bloc de texte',
        toggle: 'Pop-up invites',
        warning: 'caveat!',
        viewXML: '&lt;/&gt;',
        yes: 'Oui'
      },
      zhtw: {
        addOption: '新增選項',
        allFieldsRemoved: '已移除全部的欄位。',
        allowSelect: '允許全選',
        autocomplete: '自動完成',
        button: '按鈕',
        cannotBeEmpty: '此欄位不允許空白的',
        checkboxGroup: '核取方塊群組',
        checkbox: '核取方塊',
        checkboxes: '核取方塊組',
        className: 'CSS 類別',
        clearAllMessage: '你確定要移除所有的項目嗎?',
        clearAll: '清除',
        close: '關閉',
        copy: '複製到剪貼簿',
        dateField: '日期欄位',
        description: '提示文字',
        descriptionField: '描述說明',
        devMode: '開發者模式',
        editNames: '編輯名稱',
        editorTitle: '表單元件',
        editXML: '編輯 XML',
        fieldDeleteWarning: false,
        fieldVars: '欄位變數',
        fieldNonEditable: '此欄位無法修改。',
        fieldRemoveWarning: '你確定要移除此項目嗎?',
        fileUpload: '檔案上傳',
        formUpdated: '表單已上傳',
        getStarted: '請拖拉右邊的元件到此區域。',
        hide: '編輯',
        hidden: '隱藏欄位',
        label: '欄位名稱',
        labelEmpty: '欄位名稱不能是空的',
        limitRole: '限制可讀取的角色:',
        mandatory: 'Mandatory',
        maxlength: '最大長度',
        minOptionMessage: '此欄位至少要兩個選項',
        name: 'ID',
        no: '否',
        off: '關',
        on: '開',
        option: '選項',
        optional: '選項的',
        optionLabelPlaceholder: '選項名稱',
        optionValuePlaceholder: '選項值',
        optionEmpty: '選項直至必需的',
        paragraph: '分段',
        placeholder: '文字段落',
        placeholders: {
          value: '值',
          label: '選項名稱',
          text: '',
          textarea: '',
          email: '請輸入你的電子郵件 Email',
          placeholder: '',
          className: '多個類別時，請用空白隔開。',
          password: '請輸入密碼'
        },
        preview: '檢視預覽',
        radioGroup: '單選群組',
        radio: '單選',
        removeMessage: '移除元件',
        remove: '&#215;',
        required: '必須的',
        richText: '文字編輯框',
        roles: '存取',
        save: '儲存',
        selectOptions: '選項',
        select: '選擇',
        selectColor: '顏色選擇',
        selectionsMessage: '允許多重選擇',
        size: '大小',
        sizes: {
          xs: '最小',
          sm: '小',
          m: '預設',
          lg: '大'
        },
        style: '樣式',
        styles: {
          btn: {
            'default': '預設',
            danger: 'Danger',
            info: 'Info',
            primary: 'Primary',
            success: 'Success',
            warning: 'Warning'
          }
        },
        subtype: '格式',        
        text: 'Champ de texte',
        textArea: '文字區塊',
        toggle: '彈出提示',
        warning: '警告!',
        viewXML: '&lt;/&gt;',
        yes: '是'
      }
    },
    $fbTemplate = $(document.getElementById('fb-editor'));
  $fbTemplate.formBuilder();

  $('.language-selector li').click(function() {
    var lang = this.id;

    $fbTemplate.empty().formBuilder({
      messages: language[lang] || {}
    });
  });

});