import React from 'react'
import useStyles from './styles'


const FileBase = ({ multiple, onDone, children, id, fileType }) => {

  const classes = useStyles()

  const handleChange = (e) => {
    const files = e.target.files
    const allFilles = []
    for (let i = 0; i < files.length; i++) {
      let file = files[i]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        }
        fileType ? ((fileType.find(type => type === fileInfo.type)) ? allFilles.push(fileInfo) : alert("The choose must be jpeg or png image")) : allFilles.push(fileInfo)
        allFilles.length === files.length && (multiple ? onDone(allFilles) : onDone(allFilles[0]))
      }
    }
  }
  return (
    <>
      <div className={classes.fileBaseContainer}>
        <input type="file" id={id} onChange={handleChange} hidden />
        <label htmlFor={id}>
          {children}
        </label>
      </div>
    </>

  );
}

export default FileBase;