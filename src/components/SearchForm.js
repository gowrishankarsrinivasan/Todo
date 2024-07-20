// import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React, { useState } from "react";

const styles = {
  form: {
    display: "flex",
    maxWidth: "60%",
  },
  input: {
    width: "90%",
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem 0 0 0.375rem",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  },
  inputFocus: {
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 0.2rem rgba(59, 130, 246, 0.25)",
  },
  btn: {
    display: "flex",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "0 0.375rem 0.375rem 0",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  buttonHover: {
    backgroundColor: "#2563eb",
  },
  icon: {
    width: "1.25rem",
    height: "1.25rem",
    color: "#ffffff",
  },
};

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...styles.input,
          ...(isFocused && styles.inputFocus),
        }}
        required
      />
      <button
        type="submit"
        style={styles.btn}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor =
            styles.buttonHover.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = styles.btn.backgroundColor)
        }
      >
        <svg
          style={styles.icon}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            margin: "-1px",
            padding: "0",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            border: "0",
          }}
        >
          Search
        </span>
      </button>
    </form>
  );
};

export default SearchForm;
