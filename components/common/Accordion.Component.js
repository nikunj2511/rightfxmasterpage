import AccordionComp from 'react-bootstrap/Accordion';
import useTranslation from 'next-translate/useTranslation';
import axios from 'axios';
import { useState,useRef } from 'react';

export default function Accordion(props) {
    const { t } = useTranslation('career');
    const initialValue = { id: null,name: "" };
    const [fileNameArray , setFileNameArray]=useState([]);
    const [formData , setFormData]=useState(null);
    const [headerData , setHeaderData]=useState();
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
    const onSubmitToggle =()=>{
let fileData = new FormData();
let postData = {};
if(formData != null){
    
    let checkfile = formData;
    fileData.set("file", checkfile);
    // fileData.append("type",headerData);
    // fileData.append("form",'careers');
    postData={form:'careers',type:headerData,data:fileData}
    axios.post('/api/rightfx',fileData,{ 
        headers: {
            'Content-Type': 'multipart/form-data'
          }
        
    },
      ).then(res=>{
          
      })
}

    }
    const onFileUpload=(e,index,header)=>{
let doc = document.getElementById(header);
let file = doc.files[0]
if( file != null){
    let fileExtension = file.name.split('.').pop();
    if(fileExtension =="pdf" || fileExtension =="doc" ){
        setFormData(file);
        setHeaderData(header);
        if(fileNameArray.length>0){
            setFileNameArray([]);
        }
        let newElement = {id:index,name:file.name}
        setFileNameArray(initialValue=> [...initialValue,newElement]);
    }else{

        //error
    }
}
    }
    const copyToClipboard=(e)=> {
        navigator.clipboard.writeText(e.target.textContent)
        setCopySuccess('Copied!');
      };
    return (
        <AccordionComp  {...(!props.isCollapseAll && { defaultActiveKey: "0" })}>
            {props.items && props.items.map((item, i) =>
                <AccordionComp.Item key={i} eventKey={i + ''}>
                    <AccordionComp.Header>{props.icon && <img src={props.icon} className="me-3 w-40p" />}{item.header}</AccordionComp.Header>
                    <AccordionComp.Body>
                        {item.body}

                        {props.isUpload &&
                            <div className="d-flex w-100 position-relative btn-upload">
                                <label className="form-control d-flex align-items-center cursor-pointer mb-responsive-creers">
                                    {/* <input key={i} id={item.header} onChange={e=>onFileUpload(e,i,item.header)} type="file" placeholder="Email address" className="form-control d-none" />
                                     {
                                     fileNameArray.length > 0 ? fileNameArray.map((item2,index)=>{
                                       return  (item2.id === i ? item2.name : t('Submit Your CV'));
                                    }) :t('Submit Your CV')} */}
                                  <span ref={textAreaRef}  onClick={e=>copyToClipboard(e)}>  careers@rightfx.com</span>
                                 
                                </label>
                                <a type="submit" className="btn btn-primary mb-responsive-creers-btn" href="mailto:careers@rightfx.com">{t('Join Our Team')}</a>
                                {/* <button type="submit" className="btn btn-primary">{t('Join Our Team')}</button> */}

    <div id="copyText" className="copyTextCareer">
    {copySuccess}
    </div>

                              
                            </div>
                        }
                    </AccordionComp.Body>
                </AccordionComp.Item>
               
            )}
        </AccordionComp>
    );
}