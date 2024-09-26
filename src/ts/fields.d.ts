declare namespace kintone.types {
  interface Fields {
    備考: kintone.fieldTypes.MultiLineText;
    校正回数: kintone.fieldTypes.SingleLineText;
    会員ID: kintone.fieldTypes.Number;
    注文商品名: kintone.fieldTypes.SingleLineText;
    校正番号: kintone.fieldTypes.SingleLineText;
    校正状況: kintone.fieldTypes.DropDown;
    営業所属: kintone.fieldTypes.SingleLineText;
    入稿データ: kintone.fieldTypes.RadioButton;
    注文番号: kintone.fieldTypes.SingleLineText;
    受注商品番号: kintone.fieldTypes.SingleLineText;
    受注明細書番号: kintone.fieldTypes.SingleLineText;
    ECCUBEのリンク: kintone.fieldTypes.Link;
    お客様からの修正内容: kintone.fieldTypes.MultiLineText;
    納期: kintone.fieldTypes.SingleLineText;

    営業担当者: kintone.fieldTypes.UserSelect;
    編集担当者: kintone.fieldTypes.UserSelect;
    刺繍画像: kintone.fieldTypes.File;
    デザイン画像: kintone.fieldTypes.File;
    のし画像: kintone.fieldTypes.File;
    タグ画像: kintone.fieldTypes.File;
    その他画像: kintone.fieldTypes.File;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
