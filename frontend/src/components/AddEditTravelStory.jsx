import React from 'react'
import { IoMdAdd, IoMdClose } from "react-icons/io"
import { MdOutlineDeleteOutline, MdOutlineUpdate } from "react-icons/md"
import DateSelector from "./DateSelector"

const AddEditTravelStory = ({
    storyInfo,
    type,
    onClose,
    getAllTravelStories,
}) => {
    const handleAddOrUpdateClick = () => {}
  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-medium text-slate-700">
          {type === "add" ? "Add Story" : "Update Story"}
        </h5>

        <div>
          <div className="flex items-center gap-3 bg-cyan-50/50 p-2 rounded-l-lg">
            {type === "add" ? (
              <button class="btn-small" onClick={handleAddOrUpdateClick}>
                <IoMdAdd className="text-lg" /> ADD STORY
              </button>
            ) : (
              <>
                <button className="btn-small" onClick={handleAddOrUpdateClick}>
                  <MdOutlineUpdate className="text-lg" /> UPDATE STORY
                </button>

                <button className="btn-small btn-delete">
                  <MdOutlineDeleteOutline className="text-lg" /> DELETE STORY
                </button>
              </>
            )}

            <button class="" onClick={onClose}>
              <IoMdClose className="text-xl text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-1 flex-col gap-2 pt-4">
          <label className="input-label">TITLE</label>

          <input
            type="text"
            className="text-2xl text-slate-900 outline-none"
            placeholder="At the dawn of ..."
          />

          <div className="my-3">
            <DateSelector />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEditTravelStory
