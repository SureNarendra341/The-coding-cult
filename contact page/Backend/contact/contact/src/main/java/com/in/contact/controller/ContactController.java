package com.in.contact.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.in.contact.model.ContactForm;
import com.in.contact.model.ContactInfo;
import com.in.contact.repository.ContactFormRepository;
import com.in.contact.repository.ContactInfoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class ContactController 
{
	
	 @Autowired	
	    private ContactFormRepository contactFormRepository;
	 
	 @Autowired
	    private ContactInfoRepository contactInfoRepository;

	    @PostMapping("/contact")
	    public String receiveContact(@RequestBody ContactForm contact) {
	        contactFormRepository.save(contact);
	        return "Thank you for contacting us!";
	    }
	    
	    @GetMapping("/contact-info")
	    public ContactInfo getContactInfo() {
	        return contactInfoRepository.findTopByOrderByIdAsc();
	    }

	    // Update contact 
	    @PutMapping("/contact-info")
	    public ContactInfo updateContactInfo(@RequestBody ContactInfo updated) {
	        ContactInfo existing = contactInfoRepository.findTopByOrderByIdAsc();
	        if (existing == null) {
	            return contactInfoRepository.save(updated);
	        }
	        //existing.setTitle(updated.getTitle()); 
	        existing.setLocation(updated.getLocation());
	        existing.setPhone(updated.getPhone());
	        existing.setHours(updated.getHours());
	        return contactInfoRepository.save(existing);
	    }
	    
	    //title
	    @PatchMapping("/contact-info/title")
	    public ContactInfo updateTitle(@RequestBody Map<String, String> updateRequest) {
	        String newTitle = updateRequest.get("title");
	        ContactInfo existing = contactInfoRepository.findTopByOrderByIdAsc();
	        if (existing == null) {
	            ContactInfo newInfo = new ContactInfo();
	            newInfo.setTitle(newTitle);
	            return contactInfoRepository.save(newInfo);
	        }
	        existing.setTitle(newTitle);
	        return contactInfoRepository.save(existing);
	    }
}
