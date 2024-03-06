package com.example.Inventory.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;


@Configuration
@EnableWebSecurity
public class SpringSecurity {
	
	@Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
	}
	
	 @Bean
	    public  PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	 
	 @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		 /*http.csrf().disable().authorizeRequests((auth)->
		 auth.requestMatchers("/login", "/signup", "/index").permitAll().anyRequest().authenticated()).formLogin(form->form.loginPage("/login")
				 .loginProcessingUrl("/login").defaultSuccessUrl("/dashboard").permitAll()).logout(logout->
				 logout.invalidateHttpSession(true).clearAuthentication(true).
				 logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login?logout").permitAll()).cors(Customizer.withDefaults());
		 
		 return http.build();*/
		 
		 http
         .csrf().disable()
         .authorizeRequests()
             .requestMatchers("/signup","/login","/items","/saveitem","/delete").permitAll() // Permit access to /login endpoint
             .anyRequest().authenticated()
             .and()
         .logout()
             .permitAll();
		 
		 return http.build();
	 }
	 
}
