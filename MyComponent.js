// MyComponent.js

import React, { useState } from 'react';
import apiService from './basic/screens/apiService'; // apiService.js dosyasını içe aktarın

function MyComponent() {
  const [responseData, setResponseData] = useState(null);

  const postData = async () => {
    try {
      const response = await apiService.post('/postData', {
        key: 'value',
        anotherKey: 'anotherValue'
      });
      setResponseData(response.data);
      console.log('İşlem tamamlandı:', response.data);
    } catch (error) {
      console.error('Hata oluştu:', error);
    }
  };

  return (
    <div>
      <button onClick={postData}>Veri Gönder</button>
      {responseData && (
        <div>
          <h2>Cevap:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
