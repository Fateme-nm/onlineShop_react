import React from 'react';

const OrderModal = () => {
    return (
        <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-6 px-8 border-4 border-primary rounded-xl">
          <div className="flex text-md justify-between items-center w-full">
            <button onClick={handleClose}>
              <i className="fa fa-close bg-primary rounded px-2 py-1"></i>
            </button>
            <p>افزودن/ویرایش کالا</p>
          </div>
          <div className="flex justify-between">
            <form
              className="flex flex-col items-end w-full"
              onSubmit={formik.handleSubmit}
            >
              <div className="w-full flex justify-between space-x-3">
                {/* <FieldModal
                  label="تصویر کالا"
                  type="file"
                  accept="image/*"
                  id="image"
                  name="image"
                  formik={formik}
                  input={true}
                  imageRef={imageRef}
                /> */}
                <FieldModal
                  label="نام کالا"
                  type="text"
                  id="name"
                  name="name"
                  formik={formik}
                  input={true}
                />
              </div>
              <div className="w-full flex justify-between space-x-3">
                <FieldModal
                  label="قیمت"
                  type="text"
                  id="price"
                  name="price"
                  formik={formik}
                  input={true}
                />
                <FieldModal
                  label="تعداد"
                  type="number"
                  id="count"
                  name="count"
                  formik={formik}
                  input={true}
                />
                <FieldModal
                  label="دسته بندی"
                  id="categoryId"
                  name="categoryId"
                  formik={formik}
                  select={true}
                />
                <FieldModal
                  label="رنگ"
                  id="colorId"
                  name="colorId"
                  formik={formik}
                  select={true}
                />
              </div>
              <FieldModal
                label="توضیحات"
                id="description"
                name="description"
                formik={formik}
                textarea={true}
              />
              <button type="submit" className="bg-submit rounded-md py-2 px-4">
                ذخیره
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default OrderModal;
