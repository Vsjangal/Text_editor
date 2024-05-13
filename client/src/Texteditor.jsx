// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "quill/dist/quill.snow.css";
import "./styles.css";
import ReactQuill from "react-quill";
import axios from "axios";
// import https from "https-browserify";
const TextEditor = () => {
  const [content, setContent] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get-details")
      .then((response) => {
        setFileList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching file details:", error);
      });
  }, []);
  const handleFileSelect = (file) => {
    setContent(file.content);
  };

  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  var formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const handleProcedureContentChange = (content) => {
    setContent(content);
  };

  axios.get("http://localhost:3000/get-details").then((data) => {
    console.log(data);
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Text Editor In React JS</h2>
      <div className="file-start">
        <div className="file-list">
          <h3>File List</h3>
          <ul>
            {fileList.map((file) => (
              <li
                key={file._id}
                onClick={() => handleFileSelect(file)}
              >
                {file.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{ display: "grid", justifyContent: "center", width: "100%" }}
        >
          <button
            onClick={() => {
              axios
                .post("http://localhost:3000/save-content", {
                  name: "vijay.txt",
                  content: encodeURIComponent(content),
                })
                .then(() => {
                  console.log("file send");
                });
            }}
          >
            Save
          </button>
          <div id="editor-container">
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              placeholder="write your content ...."
              onChange={handleProcedureContentChange}
              value={content}
              style={{
                width: "60vw",
                height: "400px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
