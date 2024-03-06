package com.example.Inventory.Exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class DuplicateUserdetails extends RuntimeException{
	
	public DuplicateUserdetails(String message) {
		super(message);
	}

}
