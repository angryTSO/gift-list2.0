import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/listPage.module.css';
import { FaTimes } from 'react-icons/fa';

const ListPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [infoItems, setInfoItems] = useState([]);
  const [selectedStore, setSelectedStore] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const previewImage = (event) => {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function () {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(input.files[0]);
  };

  const submitForm = () => {
    const newInfoItem = {
      store: selectedStore,
      url,
      price,
      imagePreview,
    };

    setInfoItems((prevInfoItems) => [...prevInfoItems, newInfoItem]);

    setSelectedStore('');
    setUrl('');
    setPrice('');
    setImagePreview('');

    closePopup();
  };

  const deleteInfoItem = (index) => {
    const updatedInfoItems = infoItems.filter((_, i) => i !== index);
    setInfoItems(updatedInfoItems);
  };

  return (
    <div>
      <Head>
        <title>List Page</title>
      </Head>

      <div>
        <h1>List Page</h1>

        <div className={styles['header']}>
          <button className={styles['home-button']} onClick={openPopup}>
            Open Popup
          </button>

          <button type="button" className={styles['home-button']}>
            <Link href="/registration">Create username</Link>
          </button>

          <button>
            <Link href="/">Home</Link>
          </button>
        </div>

        {popupVisible && (
          <div className={styles['overlay']}>
            <div className={styles['popup-form']}>
              <span className={styles['popup-exit']} onClick={closePopup}>
                <FaTimes />
              </span>

              <select
                id="storeSelect"
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
              >
                <option value="">Select a Person</option>
                <option value="mc">Mc</option>
                <option value="sj">SJ</option>
                <option value="asa">ASA</option>
              </select>

              <label htmlFor="url">URL:</label>
              <input
                type="url"
                id="url"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />

              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <label htmlFor="image">Image:</label>
              <input type="file" id="image" onChange={previewImage} />

              <img id="imagePreview" src={imagePreview} alt="Image Preview" />

              <button className={styles['submit-button']} onClick={submitForm}>
                Submit
              </button>
            </div>
          </div>
        )}

        <div className={styles['info-container']}>
          {infoItems.map((infoItem, index) => (
            <div className={styles['info-item']} key={index}>
            <span className={styles['popup-exit']} onClick={() => deleteInfoItem(index)}>
                <FaTimes />
              </span><br></br>
              
              <strong>Person:</strong> {infoItem.store} <br />
              <strong>URL:</strong> {infoItem.url} <br />
              <strong>Price:</strong> {infoItem.price} <br />
              <strong>Image:</strong>
              <br />
              <img className={styles['submitted-img']} src={infoItem.imagePreview} alt="Submitted Image" />
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
