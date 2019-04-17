package com.MAvha.test.model.json.adapter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;




public class JsonByteSerializer extends JsonSerializer<byte[]>{

	@Override
	public void serialize(byte[] src, JsonGenerator gen, SerializerProvider provider) throws IOException, JsonProcessingException {

		String str = new String(src, StandardCharsets.UTF_8);
		
		gen.writeString(str);

	}

}