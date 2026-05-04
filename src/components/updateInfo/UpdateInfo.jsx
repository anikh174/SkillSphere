import { authClient } from "@/lib/auth-client";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const UpdateInfo = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    await authClient.updateUser({
      image: photo,
      name: name,
    });
    toast.success("Name and Image change perfectly, Please click the close button")
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <BiEdit></BiEdit>Update your information
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form
            className="mt-5 flex justify-center items-center"
            onSubmit={onSubmit}
          >
            <fieldset className="fieldset bg-base-200 border-orange-300 rounded-box w-sm border-4 p-4 relative">
              <label className="label text-lg text-orange-400 font-semibold">
                Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="type your name"
                name="name"
              />

              <label className="label text-lg text-orange-400 font-semibold">
                Photo Url
              </label>
              <input
                type="text"
                className="input"
                placeholder="enter your photo url"
                name="photo"
              />

              <button className="btn btn-neutral mt-4" type="submit">
                Save
              </button>
            </fieldset>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateInfo;
