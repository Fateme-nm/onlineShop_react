import React from "react";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const FieldModal = ({
  label,
  type,
  accept,
  formik,
  name,
  id,
  input,
  select,
  multiSelect,
  description,
}) => {
  const { categories, colors, sizes } = useSelector((state) => state.products);
  let selectFor = name === "colorId" ? colors : categories;

  return (
    <div
      className={`${name !== "name" && name !== "categoryId" && "mt-4"} w-full`}
    >
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      {input && (
        <input
          type={type}
          accept={accept}
          name={name}
          id={id}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border border-gray-300 focus:border-primary focus:outline-0 rounded-sm h-8"
        />
      )}
      {description && (
        <CKEditor
          id={id}
          editor={ClassicEditor}
          data={description.current}
          onChange={(event, editor) => {
            description.current = editor.getData();
          }}
          className="w-full border border-gray-300 focus:outline-0 focus:border-primary rounded-sm h-32"
        />
      )}
      {select && (
        <select
          name={name}
          id={id}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border border-gray-300 focus:outline-0 focus:border-primary rounded-sm h-8"
        >
          <option></option>
          {selectFor.map((cat) => (
            <option value={cat.id} key={cat.id} className="hover:bg-primary">
              {cat.name}
            </option>
          ))}
        </select>
      )}
      {multiSelect && (
        <select
          className="form-multiselect w-full border border-gray-300 focus:outline-0 focus:border-primary rounded-sm"
          multiple
          value={formik.values[name]}
          onChange={(e) => {
            const sizeId = formik.values["sizeId"];
            const value = e.target.value;
            const isExist = !!sizeId.find((size) => size == value);
            !isExist && formik.setFieldValue("sizeId", [...sizeId, value]);
          }}
          size="2"
          name={name}
          id={id}
        >
          {sizes.map((size) => (
            <option
              value={size.id}
              key={size.id}
              className="hover:bg-primary hover:text-white"
            >
              {size.name}
            </option>
          ))}
        </select>
      )}
      {!description && formik.errors[name] && formik.touched[name] ? (
        <div className="text-primary">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FieldModal;
