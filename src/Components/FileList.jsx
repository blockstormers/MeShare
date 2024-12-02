import React from 'react'

export default function FileList(file) {
    const files=file.files;
  return (
    <div>
        <div className="bg-blue-700 p-4 rounded-lg">
    {files.length === 0 ? (
      <p className="text-center text-gray-300">No files available</p>
    ) : (
      <ul>
        {files.map((file) => (
          <li
            key={file.id}
            className="flex justify-between p-2 bg-blue-800 rounded-lg mb-2"
          >
            <span>{file.name}</span>
            <span className="text-sm text-gray-300">{file.size}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
  </div>
  )
}
