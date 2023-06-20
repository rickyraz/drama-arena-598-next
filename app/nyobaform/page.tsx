"use client";
import React, { useState } from "react";

function Contoh() {
  const [inputData, setInputData] = useState({ data1: "", data2: "" });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Menghentikan aksi default submit form

    console.log("Data yang di-submit: ", inputData.data1, inputData.data2); // Mencetak data ke console
  };
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setInputData((prevData: { data1: string; data2: string }) => ({
      ...prevData,
      [name]: value,
    }));
    // Mengupdate nilai input berdasarkan nama properti
  };
  return (
    <div className="bg-gray-100">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="data1"
            value={inputData.data1}
            onChange={handleChange}
            placeholder="Masukkan data 1"
          />
          <input
            type="text"
            name="data2"
            value={inputData.data2}
            onChange={handleChange}
            placeholder="Masukkan data 2"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <SelectTextareaSubmit />
    </div>
  );
}

function SelectTextareaSubmit() {
  const [formData, setFormData] = useState({
    selectValue: "",
    textareaValue: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [noteStatus, setNoteStatus] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Menghentikan aksi default submit form

    if (formData.selectValue === "") {
      setWarning("Mohon pilih opsi pada select tag.");
      return;
    }

    console.log(
      "Data yang di-submit: ",
      formData.selectValue,
      formData.textareaValue
    ); // Mencetak data ke console
    setIsSubmitted(true);
    setIsDisabled(true);
    setWarning("");

    if (formData.textareaValue === "") {
      setNoteStatus("Catatan Kosong");
    } else {
      setNoteStatus("Tanda Tercatat");
    }
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value })); // Mengupdate nilai input berdasarkan nama properti
  };

  const handleTextAreaFocus = () => {
    if (!formData.textareaValue) {
      setNoteStatus("Catatan Kosong");
    }
  };

  const handleTextAreaBlur = () => {
    if (formData.textareaValue) {
      setNoteStatus("Tercatat");
    } else {
      setNoteStatus("Catatan Kosong");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          name="selectValue"
          value={formData.selectValue}
          onChange={handleChange}
          disabled={isSubmitted || isDisabled}
        >
          <option value="">Pilih opsi</option>
          <option value="Opsi 1">Opsi 1</option>
          <option value="Opsi 2">Opsi 2</option>
          <option value="Opsi 3">Opsi 3</option>
        </select>
        <br />
        <textarea
          name="textareaValue"
          value={formData.textareaValue}
          onChange={handleChange}
          placeholder="Masukkan teks"
          readOnly={isSubmitted || isDisabled}
          onFocus={handleTextAreaFocus}
        ></textarea>
        <br />
        <input
          type="submit"
          value={isSubmitted ? "Sudah Dikirim" : "Submit"}
          disabled={isSubmitted || isDisabled}
          onBlur={handleTextAreaBlur}
        />
      </form>
      {warning && <p>{warning}</p>}{" "}
      {/* Menampilkan pesan peringatan jika ada */}
      {noteStatus && <p>{noteStatus}</p>} {/* Menampilkan status catatan */}
    </div>
  );
}

export default Contoh;
