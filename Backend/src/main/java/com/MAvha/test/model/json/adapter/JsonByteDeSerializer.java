package com.MAvha.test.model.json.adapter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;


import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;



public class JsonByteDeSerializer extends JsonDeserializer<byte[]>{

	@Override
    public byte[] deserialize(JsonParser jsonparser,
            								DeserializationContext deserializationcontext) throws IOException, JsonProcessingException {
		
        try {
            return jsonparser.getText().getBytes(StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
	

}