package atv6;

public class Veiculo {
	String marca;
	String modelo;
	int rodas;
	
	public Veiculo(String marca, String modelo,int rodas){
		this.marca=marca;
		this.modelo=modelo;
		this.rodas=rodas;
	}
	public void acelerar() {
		System.out.println("Veiculo"+ modelo +"acelerar");
	}
	public void frear() {
		System.out.println("Veiculo"+ modelo + " acelerar");
		
		
	}

	public void info() {
		System.out.println("Bicicleta");
		System.out.println(" Marca "+ marca);
		System.out.println("Modelo "+ modelo);
		System.out.println("Rodas "+ rodas);
		
	}
}
	
