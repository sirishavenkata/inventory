package com.example.Inventory.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Inventory.DTO.userDTO;
import com.example.Inventory.Entity.UserEntity;
import com.example.Inventory.Repository.userRepository;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;


@Service
public class UserService {
	
	@Autowired
	private userRepository userrepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	 

	
	public void saveUser( userDTO userdto) {
		
		UserEntity user=new UserEntity();
		user.setFirstName(userdto.getFirstName());
		user.setLastName(userdto.getLastName());
		user.setUserName(userdto.getUserName());
		user.setPassword(passwordEncoder.encode(userdto.getPassword()));
		user.setUserDOB(userdto.getUserDOB());
		user.setCreatedOn(userdto.getCreatedOn());
		user.setCreatedBy(userdto.getCreatedBy());
		
		userrepo.save(user);
	}
   
    
    
    private userDTO convertEntityToDto(UserEntity user) {
    	userDTO userdto=new userDTO();
    	userdto.setFirstName(user.getFirstName());
    	userdto.setLastName(user.getLastName());
    	userdto.setUserName(user.getUserName());
    	userdto.setUserDOB(user.getUserDOB());
    	return userdto;
    	
    }
    
    public List<userDTO> findAllUsers(){
    	List<UserEntity> users=userrepo.findAll();
    	return users.stream().map((user)->convertEntityToDto(user)).collect(Collectors.toList());
    }
    
    public void deleteUser(UserEntity user) {
        userrepo.delete(user);
    }
    
    public Optional<UserEntity> findUserByUsername(String UserName) {
        return userrepo.findByuserName(UserName);
    }
    
    public UserEntity validateAndGetUserByUsername(String username) {
    	return  findUserByUsername(username)
    			.orElseThrow(()-> new UsernameNotFoundException(String.format("User with username %s not found",username)));
    }
    
    public boolean hasUserWithUsername(String username) {
        return userrepo.existsByuserName(username);
    }
    public Optional<UserEntity> validUsernameAndPassword(String username, String password) {
        return findUserByUsername(username)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()));
    }
    
    	
    
   

}
