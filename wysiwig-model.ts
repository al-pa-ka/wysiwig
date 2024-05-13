type WysiwigDataTypeText = {
    type: "TEXT";
    decoration: "ITALICS" | "BOLD";
};

type WysiwigDataTypeList = {
    type: "LIST";
    items: string[] | WysiwigDataTypeText[];
};

type WysiwigDataTypeImage = {
    type: "IMAGE";
    source: URL;
};

type WysiwigDataType =
    | WysiwigDataTypeText
    | WysiwigDataTypeList
    | WysiwigDataTypeImage;

export {
    WysiwigDataType,
    WysiwigDataTypeText,
    WysiwigDataTypeList,
    WysiwigDataTypeImage,
};
