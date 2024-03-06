package com.example.Inventory.Repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Inventory.Entity.UserEntity;

public interface userRepository extends JpaRepository<UserEntity,Long> {
	
	Optional<UserEntity> findByuserName(String username);

	boolean existsByuserName(String username);
}
