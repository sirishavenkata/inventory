package com.example.Inventory.Controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Inventory.DTO.ItemDTO;
import com.example.Inventory.DTO.LoginDTO;
import com.example.Inventory.DTO.userDTO;
import com.example.Inventory.Entity.UserEntity;
import com.example.Inventory.Exception.DuplicateUserdetails;
import com.example.Inventory.Service.ItemService;
import com.example.Inventory.Service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class userController {
	
	@Autowired
	private UserService userservice;
	@Autowired
	private ItemService itemservice;
	
	 @GetMapping("/dashboard")
	    public String home() {
	        return "user Logged in successfully";
	    }
	 
	 @PostMapping("/signup")
	 public String signup(@RequestBody userDTO userdto) {
		  if(userservice.hasUserWithUsername(userdto.getUserName())) {
			  throw new DuplicateUserdetails(String.format("user %s is already registred.Please Login",userdto.getUserName()));
		  }
		  
		  userservice.saveUser(userdto);
		  return String.format("user %s registered SuccessFully", userdto.getUserName());
		 
	 }
	 
	 @PostMapping("/login")
	 public ResponseEntity<String> login(@RequestBody LoginDTO logindto) {
		 
		 Optional<UserEntity> userlogin=userservice.validUsernameAndPassword(logindto.getUserName(), logindto.getPassword());
		 
		 if(userlogin.isPresent()) {
			 UserEntity user=userlogin.get();
			 return ResponseEntity.ok("user Logged in");
		 }
		return ResponseEntity.ok("Invalid Username or Password");
	 }
	 
	 @PostMapping("/saveitem")
	 public ResponseEntity<String> createItem(@RequestBody ItemDTO itemdto){
		 itemservice.saveItem(itemdto);
		 return  ResponseEntity.ok("Item created Successfully");
	 }
	 @GetMapping("/items")
	 public List<ItemDTO> getAllBooks(){
		 
		return  itemservice.findAllItems();
	 }
	 
	 @DeleteMapping("/delete")
	 public ResponseEntity<String> deleteitemsById(@RequestBody() List<Long> selectedRows){
		 itemservice.deleteitem(selectedRows);
		 return ResponseEntity.ok("items Deleted Successfully");
	 }
	 
	 
	 
	 
	
}
